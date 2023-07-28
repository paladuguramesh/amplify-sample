import React, { useState } from "react";
import "./Dashboard.css";

const Dashboard = () => {
  
  
    return( 
     

<body>

	<header>

		<div class="logosec">
			<div class="logo">Amplify Sample</div>
			<img src="https://media.geeksforgeeks.org/wp-content/uploads/20221210182541/Untitled-design-(30).png"
				class="icn menuicn"
				id="menuicn"
				alt="menu-icon"></img>
		</div>
	</header>

	<div class="main-container">
		<div class="navcontainer">
			<nav class="nav">
				<div class="nav-upper-options">
					<div class="nav-option option1">
						<img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20221210182148/Untitled-design-(29).png"
							class="nav-img"
							alt="dashboard"></img>
						<h3> Dashboard</h3>
					</div>

					<div class="nav-option logout">
						<img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20221210183321/7.png"
							class="nav-img"
							alt="logout"></img>
						<h3>Logout</h3>
					</div>

				</div>
			</nav>
		</div>
		<div class="main">

			<div class="report-container">
				<div class="report-header">
					<h1 class="recent-Articles">Recent Articles</h1>
				</div>

				<div class="report-body">
					<div class="report-topic-heading">
						<h3 class="t-op">Article</h3>
						<h3 class="t-op">Views</h3>
						<h3 class="t-op">Comments</h3>
						<h3 class="t-op">Status</h3>
					</div>

					<div class="items">
						<div class="item1">
							<h3 class="t-op-nextlvl">Article 73</h3>
							<h3 class="t-op-nextlvl">2.9k</h3>
							<h3 class="t-op-nextlvl">210</h3>
							<h3 class="t-op-nextlvl label-tag">Published</h3>
						</div>

						<div class="item1">
							<h3 class="t-op-nextlvl">Article 72</h3>
							<h3 class="t-op-nextlvl">1.5k</h3>
							<h3 class="t-op-nextlvl">360</h3>
							<h3 class="t-op-nextlvl label-tag">Published</h3>
						</div>

						<div class="item1">
							<h3 class="t-op-nextlvl">Article 71</h3>
							<h3 class="t-op-nextlvl">1.1k</h3>
							<h3 class="t-op-nextlvl">150</h3>
							<h3 class="t-op-nextlvl label-tag">Published</h3>
						</div>

						<div class="item1">
							<h3 class="t-op-nextlvl">Article 70</h3>
							<h3 class="t-op-nextlvl">1.2k</h3>
							<h3 class="t-op-nextlvl">420</h3>
							<h3 class="t-op-nextlvl label-tag">Published</h3>
						</div>

						<div class="item1">
							<h3 class="t-op-nextlvl">Article 69</h3>
							<h3 class="t-op-nextlvl">2.6k</h3>
							<h3 class="t-op-nextlvl">190</h3>
							<h3 class="t-op-nextlvl label-tag">Published</h3>
						</div>

						<div class="item1">
							<h3 class="t-op-nextlvl">Article 68</h3>
							<h3 class="t-op-nextlvl">1.9k</h3>
							<h3 class="t-op-nextlvl">390</h3>
							<h3 class="t-op-nextlvl label-tag">Published</h3>
						</div>

						<div class="item1">
							<h3 class="t-op-nextlvl">Article 67</h3>
							<h3 class="t-op-nextlvl">1.2k</h3>
							<h3 class="t-op-nextlvl">580</h3>
							<h3 class="t-op-nextlvl label-tag">Published</h3>
						</div>

						<div class="item1">
							<h3 class="t-op-nextlvl">Article 66</h3>
							<h3 class="t-op-nextlvl">3.6k</h3>
							<h3 class="t-op-nextlvl">160</h3>
							<h3 class="t-op-nextlvl label-tag">Published</h3>
						</div>

						<div class="item1">
							<h3 class="t-op-nextlvl">Article 65</h3>
							<h3 class="t-op-nextlvl">1.3k</h3>
							<h3 class="t-op-nextlvl">220</h3>
							<h3 class="t-op-nextlvl label-tag">Published</h3>
						</div>

					</div>
				</div>
			</div>
		</div>
	</div>

	<script src="./index.js"></script>
</body>

    );
  }

export default Dashboard;
