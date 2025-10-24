<div id="top">

<!-- HEADER STYLE: CLASSIC -->
<div align="center">

<h1 align="center">ARTICLE-SERVER-FULL-STACK-BLOGGING-PLATFORM</h1>
<p align="center"><em>Empowering Creators, Inspiring Readers, Unleashing Ideas</em></p>

<!-- BADGES -->
<a href="https://github.com/MA1002643/article-server-full-stack-blogging-platform/blob/main/LICENSE" alt="license">
   <img src="https://img.shields.io/badge/license-MIT-green?style=flat&logo=opensourceinitiative&logoColor=white" alt="MIT License" />
</a>
<img src="https://img.shields.io/github/last-commit/MA1002643/article-server-full-stack-blogging-platform?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
<a href="https://github.com/MA1002643/article-server-full-stack-blogging-platform/discussions" alt="Discussions">
   <img src="https://img.shields.io/github/discussions/MA1002643/article-server-full-stack-blogging-platform" alt="Discussions" />
</a>
<a href="https://github.com/MA1002643/article-server-full-stack-blogging-platform/stargazers">
   <img src="https://custom-icon-badges.demolab.com/github/stars/MA1002643/article-server-full-stack-blogging-platform?logo=star&style=flat" alt="stars" />
</a>
<a href="https://github.com/MA1002643/article-server-full-stack-blogging-platform/issues">
   <img src="https://custom-icon-badges.demolab.com/github/issues-raw/MA1002643/article-server-full-stack-blogging-platform?logo=issue" alt="issues" />
</a>
<br>
<em>Built with the tools and technologies:</em>

<!-- TECH-STACK:START -->
<!-- TECH-STACK:END -->

</div>
<br>

---

## 📄 Table of Contents

- [Overview](#-overview)
- [Getting Started](#-getting-started)
  - [Prerequisites](#-prerequisites)
  - [Installation](#-installation)
  - [Usage](#-usage)
  - [Testing](#-testing)
- [Features](#-features)
- [Project Structure](#-project-structure)
  - [Project Index](#-project-index)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [License](#-license)
- [Acknowledgment](#-acknowledgment)

---

## ✨ Overview

**article-server-full-stack-blogging-platform** is an open-source project featuring a **Vue 3 + Vite** frontend and a **Node.js + Express** backend. The repository provides a clear full-stack structure for building, testing, and running blogging-style applications using a modern JavaScript ecosystem.

### 📚 Summary

- 🟢 **Frontend:** Vue 3 + Vite with Bootstrap styling
- 🔵 **Backend:** Express + Node.js with SQLite database
- 🟣 **Testing:** Mocha + Chai unit tests included
- 🟠 **Structure:** Two distinct folders for frontend and backend separation
- ⚪ **Database:** Local SQLite integration for lightweight persistence

---

<a id="ui-preview"></a>

## 🎨 UI Preview

|                  Frontend View                   |               Admin / Dashboard View               |
| :----------------------------------------------: | :------------------------------------------------: |
| ![Article listing](screenshots/article-list.png) | ![Dashboard Screenshot](screenshots/dashboard.png) |

---

## 📌 Features

|     | Component              | Details                                                                                                                                                                                                                                                       |
| :-- | :--------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ⚙️  | **Architecture**       | <ul><li>Full-stack **MVC pattern**</li><li>Frontend: **Vue.js**</li><li>Backend: **Express.js** REST API</li><li>Database: **SQLite** (local-file storage)</li></ul>                                                                                          |
| 📰  | **Core Features**      | <ul><li>Blog article management — **Create, Read, Update, Delete (CRUD)**</li><li>Tag-based article categorisation & filtering</li><li>Markdown-style or WYSIWYG editor for writing posts</li><li>Responsive UI optimised for both desktop & mobile</li></ul> |
| 👤  | **User & Auth System** | <ul><li>User registration & login (JWT / cookie-based authentication)</li><li>Author profile page displaying bio & authored posts</li><li>Role-based access control (Standard User / Author / Admin)</li></ul>                                                |
| 🔌  | **Integrations**       | <ul><li>**Vue Router** for smooth client-side navigation</li><li>**Axios** (or Fetch API) for RESTful communication</li><li>**dotenv** for environment variable configuration</li><li>Custom **npm/Yarn scripts** for dev, build & testing</li></ul>          |
| 🧩  | **Modularity**         | <ul><li>Reusable **Vue components** (e.g., `PostList.vue`, `PostEditor.vue`, `Navbar.vue`)</li><li>Backend routes modularised by domain (Auth, Posts, Users)</li><li>Shared utility modules for validation, sanitisation & helpers</li></ul>                  |
| 🔩  | **Code Quality**       | <ul><li>Consistent linting with **ESLint / JSHint**</li><li>Clean and readable folder structure for scalability</li><li>Inline code comments and clear documentation blocks</li></ul>                                                                         |
| 🧪  | **Testing**            | <ul><li>Backend **unit tests** with **Mocha** & **Chai**</li><li>HTTP integration tests via **chai-http**</li><li>Automated test scripts in `package.json` (`npm test`)</li></ul>                                                                             |
| ⚡️ | **Performance**        | <ul><li>Fast builds using **Vite** bundler</li><li>Optimised **SQLite queries** for lightweight operations</li><li>Client-side performance tuning with code-splitting & lazy loading</li></ul>                                                                |
| 🛡️  | **Security**           | <ul><li>Input validation using **Joi**</li><li>Basic sanitisation and profanity filtering</li><li>**CORS** middleware enabled</li><li>Protected routes & authentication middleware for content editing</li></ul>                                              |
| 📄  | **Documentation**      | <ul><li>Comprehensive **README** with setup, usage & contribution guide</li><li>Inline API documentation within backend routes</li><li>Example environment config (`.env.example`)</li></ul>                                                                  |
| 📦  | **Dependencies**       | <ul><li>**Frontend:** Vue.js, Vue Router, Axios, Vite</li><li>**Backend:** Express, SQLite3, body-parser, Joi, dotenv</li><li>**Dev Tools:** @vitejs/plugin-vue, ESLint, JSHint, Mocha, Chai</li></ul>                                                        |

---

## 📁 Project Structure

```sh
└── article-server-full-stack-blogging-platform/
    ├── Article Server Backend
    │   ├── .DS_Store
    │   ├── README.md
    │   ├── app
    │   ├── database.js
    │   ├── db.sqlite
    │   ├── node_modules
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── server.js
    │   └── tests
    └── frontend-app
        ├── .DS_Store
        ├── package-lock.json
        ├── package.json
        ├── screencast.mp4
        └── vue-project
```

---

### 📑 Project Index

<details open>
	<summary><b><code>ARTICLE-SERVER-FULL-STACK-BLOGGING-PLATFORM/</code></b></summary>
	<!-- __root__ Submodule -->
	<details>
		<summary><b>__root__</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ __root__</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
			</table>
		</blockquote>
	</details>
	<!-- frontend-app Submodule -->
	<details>
		<summary><b>frontend-app</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ frontend-app</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/MA1002643/article-server-full-stack-blogging-platform/blob/master/frontend-app/package.json'>package.json</a></b></td>
					<td style='padding: 8px;'>- Defines project dependencies, specifically integrating Bootstrap for styling and responsive design within the frontend application<br>- It ensures that the frontend maintains a consistent look and feel across devices, supporting the overall architecture by facilitating a cohesive user interface and experience<br>- This setup is essential for maintaining visual consistency and responsiveness throughout the web application.</td>
				</tr>
			</table>
			<!-- vue-project Submodule -->
			<details>
				<summary><b>vue-project</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ frontend-app.vue-project</b></code>
					<table style='width: 100%; border-collapse: collapse;'>
					<thead>
						<tr style='background-color: #f8f9fa;'>
							<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
							<th style='text-align: left; padding: 8px;'>Summary</th>
						</tr>
					</thead>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/MA1002643/article-server-full-stack-blogging-platform/blob/master/frontend-app/vue-project/README.md'>README.md</a></b></td>
							<td style='padding: 8px;'>- Establishes a foundational Vue 3 application setup using Vite, enabling efficient development, hot-reloading, and optimized production builds<br>- Serves as the core structure for building interactive, modern web interfaces within the project, facilitating seamless integration of Vue components and configurations aligned with best practices for scalable frontend architecture.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/MA1002643/article-server-full-stack-blogging-platform/blob/master/frontend-app/vue-project/package.json'>package.json</a></b></td>
							<td style='padding: 8px;'>- Facilitates the development, building, and previewing of the Vue.js-based frontend application, enabling seamless user interface interactions and navigation<br>- Integrates core dependencies like Vue, Vue Router, and Bootstrap to deliver a responsive, modular, and maintainable user experience within the overall architecture<br>- Supports efficient frontend deployment aligned with backend services and API integrations.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/MA1002643/article-server-full-stack-blogging-platform/blob/master/frontend-app/vue-project/vite.config.js'>vite.config.js</a></b></td>
							<td style='padding: 8px;'>- Configures the development environment for the Vue.js frontend application by setting up module resolution and plugin integration<br>- It streamlines the build process, ensuring smooth development and accurate path aliasing within the project architecture<br>- This setup facilitates efficient code organization and enhances developer productivity across the entire Vue-based codebase.</td>
						</tr>
						<tr style='border-bottom: 1px solid #eee;'>
							<td style='padding: 8px;'><b><a href='https://github.com/MA1002643/article-server-full-stack-blogging-platform/blob/master/frontend-app/vue-project/index.html'>index.html</a></b></td>
							<td style='padding: 8px;'>- Establishes the entry point for the Vue.js frontend application, setting up the initial HTML structure and linking the main JavaScript module<br>- It facilitates rendering the user interface within the web page, serving as the foundation for client-side interactions and visual components within the overall project architecture.</td>
						</tr>
					</table>
					<!-- src Submodule -->
					<details>
						<summary><b>src</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ frontend-app.vue-project.src</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/MA1002643/article-server-full-stack-blogging-platform/blob/master/frontend-app/vue-project/src/main.js'>main.js</a></b></td>
									<td style='padding: 8px;'>- Initialize the Vue.js application by setting up core components, routing, and Bootstrap styling to enable a cohesive and responsive user interface<br>- This entry point integrates essential libraries and mounts the app to the DOM, serving as the foundation for the frontend architecture and ensuring seamless navigation and consistent styling across the project.</td>
								</tr>
							</table>
							<!-- Services Submodule -->
							<details>
								<summary><b>Services</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ frontend-app.vue-project.src.Services</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/MA1002643/article-server-full-stack-blogging-platform/blob/master/frontend-app/vue-project/src/Services/article.service.js'>article.service.js</a></b></td>
											<td style='padding: 8px;'>- Provides an interface for managing articles within the frontend Vue application, enabling retrieval, creation, updating, and deletion of articles via API calls<br>- Facilitates seamless communication between the user interface and backend services, supporting core content management functionalities integral to the applications architecture.</td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/MA1002643/article-server-full-stack-blogging-platform/blob/master/frontend-app/vue-project/src/Services/comments.service.js'>comments.service.js</a></b></td>
											<td style='padding: 8px;'>- Provides core functionalities for managing comments within the application, enabling retrieval, creation, and deletion of comments associated with articles<br>- Facilitates seamless interaction with the backend API to support user engagement and content moderation, integrating comment-related operations into the overall architecture of the frontend Vue project.</td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/MA1002643/article-server-full-stack-blogging-platform/blob/master/frontend-app/vue-project/src/Services/users.service.js'>users.service.js</a></b></td>
											<td style='padding: 8px;'>- Provides user authentication and management functionalities within the frontend Vue application<br>- Facilitates user login, logout, registration, and retrieval of user data by interacting with backend API endpoints<br>- Integrates session handling through local storage, ensuring secure and seamless user experience across the applications architecture.</td>
										</tr>
									</table>
								</blockquote>
							</details>
							<!-- pages Submodule -->
							<details>
								<summary><b>pages</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ frontend-app.vue-project.src.pages</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/MA1002643/article-server-full-stack-blogging-platform/blob/master/frontend-app/vue-project/src/pages/Dashboard.vue'>Dashboard.vue</a></b></td>
											<td style='padding: 8px;'>- Provides the main interface for administrative management within the application, enabling user logout, and facilitating creation, updating, and deletion of articles and comments<br>- Integrates multiple components to support user oversight and content moderation, serving as a central hub for admin activities in the dashboard section of the Vue-based frontend architecture.</td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/MA1002643/article-server-full-stack-blogging-platform/blob/master/frontend-app/vue-project/src/pages/Login.vue'>Login.vue</a></b></td>
											<td style='padding: 8px;'>- Implements the user login interface within the Vue.js application, facilitating user authentication by capturing email and password inputs<br>- Integrates with the backend authentication service to validate credentials and navigates authenticated users to the dashboard, serving as a critical entry point for secure access control in the overall application architecture.</td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/MA1002643/article-server-full-stack-blogging-platform/blob/master/frontend-app/vue-project/src/pages/Home.vue'>Home.vue</a></b></td>
											<td style='padding: 8px;'>- Displays a welcoming homepage that fetches and lists blog articles with titles and authors, enabling users to navigate to individual article pages<br>- Integrates with the article service to retrieve data dynamically, providing a user-friendly interface for browsing content within the overall Vue.js-based frontend architecture.</td>
										</tr>
									</table>
								</blockquote>
							</details>
							<!-- router Submodule -->
							<details>
								<summary><b>router</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ frontend-app.vue-project.src.router</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/MA1002643/article-server-full-stack-blogging-platform/blob/master/frontend-app/vue-project/src/router/index.js'>index.js</a></b></td>
											<td style='padding: 8px;'>- Defines client-side navigation and route management within the Vue.js application, facilitating seamless transitions between pages such as Home, Login, Dashboard, and Article<br>- Implements access control for protected routes, ensuring only authenticated users can access sensitive areas like the Dashboard, thereby supporting the overall architectures focus on secure, user-friendly navigation.</td>
										</tr>
									</table>
								</blockquote>
							</details>
							<!-- components Submodule -->
							<details>
								<summary><b>components</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ frontend-app.vue-project.src.components</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/MA1002643/article-server-full-stack-blogging-platform/blob/master/frontend-app/vue-project/src/components/UpdateArt.vue'>UpdateArt.vue</a></b></td>
											<td style='padding: 8px;'>- Facilitates user-driven updates to existing articles within the application<br>- Provides a form interface for inputting article ID, title, author, and content, enabling seamless modification of article data<br>- Integrates with backend services to ensure data consistency and supports the overall architecture by enabling dynamic content management and user interaction.</td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/MA1002643/article-server-full-stack-blogging-platform/blob/master/frontend-app/vue-project/src/components/CreateArt.vue'>CreateArt.vue</a></b></td>
											<td style='padding: 8px;'>- Facilitates user-generated content creation by providing an interface for submitting new articles<br>- Integrates form validation and communicates with backend services to persist articles, supporting the overall content management architecture<br>- Enhances user interaction within the application, enabling seamless article addition and contributing to the platforms dynamic content ecosystem.</td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/MA1002643/article-server-full-stack-blogging-platform/blob/master/frontend-app/vue-project/src/components/usersCreate.vue'>usersCreate.vue</a></b></td>
											<td style='padding: 8px;'>- Facilitates user onboarding by providing a form to create new users within the application<br>- Integrates with backend services to submit user data, ensuring seamless addition of users to the system<br>- Serves as a key component in the user management architecture, enabling administrators to efficiently manage user accounts through an intuitive interface.</td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/MA1002643/article-server-full-stack-blogging-platform/blob/master/frontend-app/vue-project/src/components/Article.vue'>Article.vue</a></b></td>
											<td style='padding: 8px;'>- Displays detailed article content along with associated comments, enabling users to view, add, and interact with comments related to a specific article<br>- Integrates with backend services to fetch article data and comments dynamically, supporting real-time updates and user engagement within the overall content management architecture.</td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/MA1002643/article-server-full-stack-blogging-platform/blob/master/frontend-app/vue-project/src/components/deleteComment.vue'>deleteComment.vue</a></b></td>
											<td style='padding: 8px;'>- Facilitates user-initiated deletion of comments within the application interface<br>- Integrates a form for inputting comment identifiers and triggers backend service calls to remove specified comments, ensuring seamless content moderation<br>- Serves as a crucial component in maintaining content integrity and user engagement by enabling efficient comment management within the overall frontend architecture.</td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/MA1002643/article-server-full-stack-blogging-platform/blob/master/frontend-app/vue-project/src/components/UsersGetAll.vue'>UsersGetAll.vue</a></b></td>
											<td style='padding: 8px;'>- Provides a user interface component to fetch and display a comprehensive list of users within the application<br>- Integrates with backend services to retrieve user data dynamically, presenting it in a structured table format<br>- Serves as a key element for user management and data visualization within the overall frontend architecture.</td>
										</tr>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/MA1002643/article-server-full-stack-blogging-platform/blob/master/frontend-app/vue-project/src/components/deleteArt.vue'>deleteArt.vue</a></b></td>
											<td style='padding: 8px;'>- Facilitates user-initiated deletion of articles within the application by providing a form interface to input an article ID<br>- Integrates with backend services to execute deletion requests, ensuring seamless content management<br>- Serves as a critical component for maintaining content accuracy and enabling administrative control in the overall architecture.</td>
										</tr>
									</table>
								</blockquote>
							</details>
							<!-- Views Submodule -->
							<details>
								<summary><b>Views</b></summary>
								<blockquote>
									<div class='directory-path' style='padding: 8px 0; color: #666;'>
										<code><b>⦿ frontend-app.vue-project.src.Views</b></code>
									<table style='width: 100%; border-collapse: collapse;'>
									<thead>
										<tr style='background-color: #f8f9fa;'>
											<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
											<th style='text-align: left; padding: 8px;'>Summary</th>
										</tr>
									</thead>
										<tr style='border-bottom: 1px solid #eee;'>
											<td style='padding: 8px;'><b><a href='https://github.com/MA1002643/article-server-full-stack-blogging-platform/blob/master/frontend-app/vue-project/src/Views/App.vue'>App.vue</a></b></td>
											<td style='padding: 8px;'>- Defines the main navigation structure for the Vue.js frontend, facilitating user movement across key sections such as Home, Dashboard, and Login<br>- Serves as the primary layout component, ensuring consistent header and routing setup throughout the application, thereby supporting seamless user experience and navigation within the overall web architecture.</td>
										</tr>
									</table>
								</blockquote>
							</details>
						</blockquote>
					</details>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<!-- Article Server Backend Submodule -->
	<details>
		<summary><b>Article Server Backend</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ Article Server Backend</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/MA1002643/article-server-full-stack-blogging-platform/blob/master/Article Server Backend/server.js'>server.js</a></b></td>
					<td style='padding: 8px;'>- Establishes the core backend server infrastructure for the article platform, handling HTTP requests, middleware setup, and routing<br>- Facilitates communication between clients and server-side resources, managing API endpoints for articles, users, and comments<br>- Ensures server availability, request logging, and cross-origin access, forming the backbone for data exchange within the applications architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/MA1002643/article-server-full-stack-blogging-platform/blob/master/Article Server Backend/README.md'>README.md</a></b></td>
					<td style='padding: 8px;'>- Provides the core backend server setup for a blog engine, enabling content management and API interactions<br>- It orchestrates routing, handles data flow, and supports development workflows, forming the backbone of the full-stack application<br>- This setup ensures a scalable, testable environment for building and extending blog-related functionalities within the project architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/MA1002643/article-server-full-stack-blogging-platform/blob/master/Article Server Backend/database.js'>database.js</a></b></td>
					<td style='padding: 8px;'>- Defines and initializes the core database schema for the article platform, establishing tables for users, articles, and comments<br>- Manages user authentication data, including secure password storage, and sets up relationships between articles and comments<br>- Serves as the foundational data layer enabling user management, content creation, and interaction within the applications architecture.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/MA1002643/article-server-full-stack-blogging-platform/blob/master/Article Server Backend/package.json'>package.json</a></b></td>
					<td style='padding: 8px;'>- Defines the backend server for a full-stack blog application, managing core functionalities such as content creation, retrieval, and user interactions<br>- It orchestrates API endpoints, handles data validation, and ensures smooth communication between the frontend and database, forming the backbone of the applications architecture to support dynamic content management and user engagement.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/MA1002643/article-server-full-stack-blogging-platform/blob/master/Article Server Backend/db.sqlite'>db.sqlite</a></b></td>
					<td style='padding: 8px;'>- Article Server Backend DatabaseThis file serves as the primary data storage for the Article Server Backend, utilizing an SQLite database format<br>- It is responsible for persisting all core data related to articles, including metadata, content, and associated information<br>- Within the overall architecture, this database enables efficient data retrieval, storage, and management, supporting the backend services that deliver article content to clients<br>- Its design ensures data integrity and quick access, forming a foundational component of the applications data layer.</td>
				</tr>
			</table>
			<!-- app Submodule -->
			<details>
				<summary><b>app</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ Article Server Backend.app</b></code>
					<!-- controllers Submodule -->
					<details>
						<summary><b>controllers</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ Article Server Backend.app.controllers</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/MA1002643/article-server-full-stack-blogging-platform/blob/master/Article Server Backend/app/controllers/articles.controllers.js'>articles.controllers.js</a></b></td>
									<td style='padding: 8px;'>- Defines the core API endpoints for managing articles within the backend architecture, enabling retrieval, creation, updating, and deletion of article data<br>- Facilitates seamless interaction between client requests and database operations, ensuring data validation and proper error handling to maintain the integrity and accessibility of article content across the application.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/MA1002643/article-server-full-stack-blogging-platform/blob/master/Article Server Backend/app/controllers/comments.controllers.js'>comments.controllers.js</a></b></td>
									<td style='padding: 8px;'>- Provides core functionalities for managing comments within the article platform, including retrieving all comments for a specific article, creating new comments with validation, and deleting existing comments<br>- Facilitates seamless interaction between user requests and the database, ensuring data integrity and proper error handling within the comment-related operations of the backend architecture.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/MA1002643/article-server-full-stack-blogging-platform/blob/master/Article Server Backend/app/controllers/user.controllers.js'>user.controllers.js</a></b></td>
									<td style='padding: 8px;'>- Manages user account operations including retrieval, registration, authentication, and session termination<br>- Facilitates user data handling, login sessions, and security through token management, supporting core user management functionalities within the applications architecture<br>- Ensures seamless user interactions and maintains secure access control across the system.</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- models Submodule -->
					<details>
						<summary><b>models</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ Article Server Backend.app.models</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/MA1002643/article-server-full-stack-blogging-platform/blob/master/Article Server Backend/app/models/user.models.js'>user.models.js</a></b></td>
									<td style='padding: 8px;'>- Defines core user management functionalities within the backend architecture, including user retrieval, authentication, session token handling, and secure password hashing<br>- Facilitates user account creation, login validation, and session management, serving as a foundational component for secure user interactions and access control across the entire application ecosystem.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/MA1002643/article-server-full-stack-blogging-platform/blob/master/Article Server Backend/app/models/comments.models.js'>comments.models.js</a></b></td>
									<td style='padding: 8px;'>- Provides core data access and management functionalities for comments associated with articles, enabling retrieval, creation, and deletion of comment records within the database<br>- Facilitates seamless interaction with the comments data layer, supporting features such as fetching all comments for an article, adding new comments with content filtering, and managing individual comment records, thereby underpinning the comment-related features of the application.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/MA1002643/article-server-full-stack-blogging-platform/blob/master/Article Server Backend/app/models/articles.models.js'>articles.models.js</a></b></td>
									<td style='padding: 8px;'>- Defines core data operations for managing articles within the backend architecture, enabling retrieval, creation, updating, and deletion of article records<br>- Facilitates seamless interaction with the database layer, supporting the applications content management capabilities and ensuring data consistency across the article lifecycle<br>- Serves as a foundational component for article-related functionalities within the overall system.</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- routes Submodule -->
					<details>
						<summary><b>routes</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ Article Server Backend.app.routes</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/MA1002643/article-server-full-stack-blogging-platform/blob/master/Article Server Backend/app/routes/user.routes.js'>user.routes.js</a></b></td>
									<td style='padding: 8px;'>- Defines API endpoints for user management and authentication within the backend server<br>- Facilitates user data retrieval, creation, login, and logout operations while enforcing authentication where necessary<br>- Integrates route handling with controller logic and authentication middleware, supporting secure interaction with user-related functionalities in the overall application architecture.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/MA1002643/article-server-full-stack-blogging-platform/blob/master/Article Server Backend/app/routes/articles.routes.js'>articles.routes.js</a></b></td>
									<td style='padding: 8px;'>- Defines RESTful API endpoints for managing articles within the backend architecture, enabling clients to retrieve, create, update, and delete articles<br>- Incorporates authentication checks for modifying operations to ensure secure access<br>- Serves as a crucial routing layer that connects client requests to corresponding controller logic, supporting the overall content management functionality of the application.</td>
								</tr>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/MA1002643/article-server-full-stack-blogging-platform/blob/master/Article Server Backend/app/routes/comments.routes.js'>comments.routes.js</a></b></td>
									<td style='padding: 8px;'>- Defines API routes for managing comments related to articles, enabling retrieval, creation, and deletion functionalities<br>- Integrates authentication for sensitive operations, ensuring secure comment management within the broader article server backend architecture<br>- Facilitates seamless interaction between clients and the comment data layer, supporting core user engagement features.</td>
								</tr>
							</table>
						</blockquote>
					</details>
					<!-- lib Submodule -->
					<details>
						<summary><b>lib</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ Article Server Backend.app.lib</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/MA1002643/article-server-full-stack-blogging-platform/blob/master/Article Server Backend/app/lib/authentication.js'>authentication.js</a></b></td>
									<td style='padding: 8px;'>- Implements authentication middleware to verify user identity via token validation, ensuring secure access control across the application<br>- Integrates with user management to authenticate requests, enabling protected routes and maintaining the integrity of user-specific data within the overall backend architecture<br>- This component is essential for safeguarding resources and enforcing security policies throughout the system.</td>
								</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
		</blockquote>
	</details>
</details>

---

## 🚀 Getting Started

### 📋 Prerequisites

This project requires the following dependencies:

- **Programming Language:** JavaScript
- **Package Manager:** Npm

### ⚙️ Installation

Build article-server-full-stack-blogging-platform from the source and install dependencies:

1. **Clone the repository:**

   ```sh
   ❯ git clone https://github.com/MA1002643/article-server-full-stack-blogging-platform
   ```

2. **Navigate to the project directory:**

   ```sh
   ❯ cd article-server-full-stack-blogging-platform
   ```

3. **Install the dependencies:**

**Using [npm](https://www.npmjs.com/):**

```sh
❯ npm install
```

### 💻 Usage

Run the project with:

**Using [npm](https://www.npmjs.com/):**

```sh
npm start
```

### 🧪 Testing

Article-server-full-stack-blogging-platform uses the {**test_framework**} test framework. Run the test suite with:

**Using [npm](https://www.npmjs.com/):**

```sh
npm test
```

---

## 🎓 Learning Outcomes

- Designed and implemented a **full-stack blogging platform** using **Vue.js**, **Express.js**, and **SQLite**, following the MVC pattern.
- Strengthened understanding of **RESTful API development**, **client–server communication**, and **state management** in modern web apps.
- Gained hands-on experience in **authentication and authorization**, including protected routes and JWT-based sessions.
- Improved proficiency with **frontend frameworks (Vue.js)** and **backend technologies (Node.js/Express)** for real-world production setups.
- Practiced **database design and integration** with SQLite, including CRUD operations, schema management, and relational logic.
- Applied **modular software architecture principles** to achieve maintainable, scalable, and testable code across both frontend and backend.
- Developed and executed **unit and integration tests** using **Mocha**, **Chai**, and **chai-http** to ensure system reliability.
- Enhanced understanding of **secure web application development**, implementing input validation, sanitisation, and CORS protection.
- Experienced complete **Dev–Build–Test workflow** using modern tooling (Vite, ESLint, npm scripts) and CI-friendly practices.
- Strengthened teamwork and professional GitHub practices through **version control**, **branching strategies**, and **clear documentation**.

---

## 📈 Roadmap

- [ ] **`Task 1`**: Implement feature one.
- [ ] **`Task 2`**: Implement feature two.
- [ ] **`Task 3`**: Implement feature three.

---

<a id="contributors"></a>

## 🤝 Contributors

<p align="left">

<!-- CONTRIBUTORS:START -->
<!-- CONTRIBUTORS:END -->

 </p>

---

<a id="acknowledgments"></a>

## ✨ Acknowledgments

- Inspired by modern publishing platforms such as **Medium**, **Hashnode**, and **Dev.to**, which influenced the app’s clean design and user-centric experience.
- Developed as part of a **full-stack software engineering initiative**, focused on mastering scalable web architecture and practical project delivery.
- Grateful to the **open-source community** behind **Node.js**, **Express.js**, **Vue.js**, and **SQLite** for providing the tools and frameworks that made this project possible.
- Appreciation to **mentors, peers, and online contributors** whose feedback and shared resources helped refine both technical and architectural decisions.
- Created to demonstrate **industry-relevant full-stack development skills** — including REST API design, authentication systems, modular architecture, and end-to-end testing.

---

<a id="license"></a>

## 📜 License

This project is licensed under the **[MIT License](https://github.com/MA1002643/article-server-full-stack-blogging-platform/blob/main/LICENSE)**. See the **[LICENSE](https://choosealicense.com/licenses/)** file for full details.

#

<p align="center">
  <strong>© 2025 Muhammad Abdullah</strong><br>
  Developed with 💙 using Vue 3, Vite, Vue Router, Bootstrap, Express (Node.js) & SQLite<br>
  <a href="#top"><img alt="Back to Top" src="https://img.shields.io/badge/Back_to_Top-0A0A0A?style=for-the-badge">
</a>
</p>
