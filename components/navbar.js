// create component parent div
const navbar = document.createElement('div');

// set component class
// navbar = 'mb-3';

//create component
navbar.innerHTML = `
<nav id="navbar" class="navbar navbar-expand-lg navbar-dark">
<div class="container-fluid d-flex">
		<div class="navbar-brand" href="#">
			<a href="../index.html">	<img src="../img/rf-logo.png"/></a>
		</div>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
		</button>

		<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav ml-auto order-2">
						<li class="nav-item">
								<a class="nav-link" href="../">Home</a>
						</li>
						<li class="nav-item">
								<a class="nav-link" href="https://rampver.com/why-rampver/">About us</a>
						</li>
						<li class="nav-item">
								<a class="nav-link" href="../">Mutual Funds</a>
						</li>
						<li class="nav-item">
								<a class="nav-link" href="../support/daily-navps.html">NAVPS</a>
						</li>
						<li class="nav-item">
								<a class="nav-link" href="../support/forms.html">Forms</a>
						</li>
						<li class="nav-item">
								<a class="nav-link" href="../risk-profiler/quiz.html">Take the Quiz!</a>
						</li>
						<li class="nav-item">
								<a class="nav-link" href="../graph/projector.html">Projection Tool</a>
						</li>
						<li class="nav-item">
								<a class="nav-link" href="../inquire/mutual-funds.html?id=1">Inquire now!</a>
						</li>
						<li class="nav-item">
								<a class="nav-link" href="https://rampver.com/seedbox/" target="_blank">Seedbox</a>
						</li>
				</ul>
		</div>
</div>
</nav>
	`;

//append component to host page
document.getElementById('navbarSet').appendChild(navbar);