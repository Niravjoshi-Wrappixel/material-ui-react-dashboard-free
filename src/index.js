import React, { Suspense } from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './assets/style.css'
import Spinner from "./views/Spinner/Spinner";
ReactDOM.render(

	<Suspense fallback={<Spinner />}>
		<Router>
			<App />
		</Router>
	</Suspense>
	,
	document.getElementById('root')
);

