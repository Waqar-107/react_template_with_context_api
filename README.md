# A react template with context api

1. The authContext maintains the auth
2. The PrivateWrapper can be used for views that are only accessible when the user is authenticated
3. The authContext has a jwt verifier that checks if the jwt is expired or not. I have made the jwt expired before 5 minutes of the actual expiry time.
4. The signin is functional, change the ui according to the need of the project

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

### material ui grid

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
