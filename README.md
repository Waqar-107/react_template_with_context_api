# a react template with context api

1. the authContext maintains the auth and also the language of the site
2. the navbar contains the language changing dropdown
3. the PrivateWrapper can be used for views that are only accessible when the user is authenticated
4. the signin is functional, change the ui according to the need of the project

# important things i forget

### get value from the url

const id = this.props.match.params.id;

### pass value through links

```js
// in the redirecting component
<Redirect
	to={{
		pathname: "/login",
		state: { from: location },
	}}
/>;

// in the other component you redirected to
const { location } = props.location.state;
```

```js
<div className={classes.gridroot}>
	<Grid container spacing={3}>
		<Grid item xs={4} sm={4} md={2} lg={2} xl={2}>
			{/*the div will be having spaces between them*/}
			<div style={{width: '100%', background: 'red'}}></div>
		}
		</Grid>
	</Grid>
</div>

gridroot: {
	flexGrow: 1,
},
```

### when using spacing={} with material ui Grid, always use `margin: auto` as style for the container
