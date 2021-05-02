import React, { useState } from "react";
import { useTable } from "react-table";
import { withStyles, Menu, MenuItem } from "@material-ui/core";
import PropTypes from "prop-types";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import "./tableScroll.css";
import styles from "./styles";

const GenericTable = (props) => {
	const { classes, columns, data, widthList } = props;
	const { handleLimitChange, handlePageChange, page, limit, total } = props;
	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
		columns,
		data,
	});

	// menu open/close
	const [anchorEl, setAnchorEl] = useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = (val) => {
		if (val && limit !== val) handleLimitChange(val);
		setAnchorEl(null);
	};

	return (
		<div className={classes.root}>
			<div {...getTableProps()} id="tableScroll" className={classes.table}>
				<div>
					{headerGroups.map((headerGroup) => (
						<div {...headerGroup.getHeaderGroupProps()} className={classes.row}>
							{headerGroup.headers.map((column, idx) => (
								<div
									className={classes.singleCell}
									{...column.getHeaderProps()}
									style={{ fontWeight: 600, width: widthList[idx] }}
								>
									{column.render("Header")}
								</div>
							))}
						</div>
					))}
				</div>
				<div {...getTableBodyProps()}>
					{rows.map((row, i) => {
						prepareRow(row);
						return (
							<div
								{...row.getRowProps()}
								className={classes.row}
								style={
									total < limit
										? total - 1 === i
											? { borderBottom: "none" }
											: {}
										: i === limit - 1
										? { borderBottom: "none" }
										: {}
								}
							>
								{row.cells.map((cell, idx) => {
									return (
										<div
											className={classes.singleCell}
											{...cell.getCellProps()}
											style={{ width: widthList[idx] }}
										>
											{cell.render("Cell")}
										</div>
									);
								})}
							</div>
						);
					})}
				</div>
			</div>

			<div className={classes.pagination}>
				<p style={{ marginRight: 20 }}>Rows per page</p>
				<div className={classes.limitChanger} onClick={handleClick}>
					{limit} <ArrowDropDownIcon />
				</div>
				<div className={classes.menuContainer}>
					{anchorEl && (
						<Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
							<MenuItem onClick={() => handleClose(2)}>2</MenuItem>
							<MenuItem onClick={() => handleClose(5)}>5</MenuItem>
							<MenuItem onClick={() => handleClose(10)}>10</MenuItem>
							<MenuItem onClick={() => handleClose(25)}>25</MenuItem>
						</Menu>
					)}
				</div>
				<div className={classes.showing}>
					Showing {page * limit + 1}-{Math.min(total, page * limit + limit)}
				</div>
				<div className={classes.limitChanger}>
					<ChevronLeftIcon
						className={`${classes.icon} ${page ? classes.enabled : classes.disabled}`}
						onClick={() => page && handlePageChange(page - 1)}
					/>
					<ChevronRightIcon
						className={`${classes.icon} ${
							page * limit + limit < total ? classes.enabled : classes.disabled
						}`}
						onClick={() => page * limit + limit < total && handlePageChange(page + 1)}
					/>
				</div>
			</div>
		</div>
	);
};

GenericTable.propTypes = {
	classes: PropTypes.object.isRequired,
	columns: PropTypes.array.isRequired,
	data: PropTypes.array.isRequired,
	widthList: PropTypes.array.isRequired,
	total: PropTypes.number.isRequired,
	handlePageChange: PropTypes.func.isRequired,
	handleLimitChange: PropTypes.func.isRequired,
	page: PropTypes.number.isRequired,
	limit: PropTypes.number.isRequired,
};

export default withStyles(styles)(GenericTable);
