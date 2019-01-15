(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{251:function(e,t,r){"use strict";r.r(t);var a=r(1),n=Object(a.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[e._m(0),e._v(" "),r("Seo"),e._v(" "),r("p",[e._v("This guide provides information intended for developers interested\nin building SiteWhere components from source code. It provides details\nabout downloading the source code, installing the required build tools,\nthen building Docker images that can be used to deploy an instance.")]),e._v(" "),e._m(1),e._v(" "),r("p",[e._v("The source code for SiteWhere is available on "),r("a",{attrs:{href:"https://github.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub"),r("OutboundLink")],1),e._v("\nat the following location:")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/sitewhere/sitewhere",target:"_blank",rel:"noopener noreferrer"}},[e._v("SiteWhere Core Repository"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("The repository includes source code as well as issue tracking and other\naspects of the development ecosystem.")]),e._v(" "),e._m(2),e._v(" "),r("p",[e._v("Source code checked in to the "),r("em",[e._v("master")]),e._v(" branch is always from the\nlatest released version of SiteWhere. Each release is tagged and may be\naccessed by downloading an archive from the\n"),r("a",{attrs:{href:"https://github.com/sitewhere/sitewhere/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("releases"),r("OutboundLink")],1),e._v(" page or\nby cloning the repository and checking out the branch corresponding to\nthe release. The branch for the upcoming SiteWhere 2.0 release is available\nat the location below:")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/sitewhere/sitewhere/tree/sitewhere-2.0.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("SiteWhere 2.0.0 Branch"),r("OutboundLink")],1)]),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),r("p",[e._v("In order to work with the code, it will need to be cloned from GitHub onto\nyour local machine. The following link covers a few options for installing\na Git client for accesing the repository:")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://help.github.com/articles/set-up-git/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Install a Git Client"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("With a Git client installed, start by cloning the SiteWhere core repository.\nIf using the command line client you can execute the following\ncommands to clone the repository and change to the current branch:")]),e._v(" "),e._m(5),r("p",[e._v("The result of the commands should look similar to the output below:")]),e._v(" "),r("InlineImage",{attrs:{src:"/images/development/git-command-line-clone.png",caption:"Git Command Line Clone"}}),e._v(" "),e._m(6),e._v(" "),r("p",[e._v("SiteWhere includes build scripts that make it easy to build deployable\nartifacts from the source code. Before building the code, there are a couple\nof tools that must be installed.")]),e._v(" "),e._m(7),e._v(" "),r("p",[e._v("All of the core source code is written in Java, so a Java compiler is required.\nRecent versions of SiteWhere use features of Java 8, so the JDK or JRE must\nbe 1.8 or above.")]),e._v(" "),r("p",[r("a",{attrs:{href:"http://www.oracle.com/technetwork/java/javase/downloads/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Download and Install Java"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("Once installed, the version can be verified as shown below:")]),e._v(" "),r("InlineImage",{attrs:{src:"/images/development/java-version-check.png",caption:"Java Version Check"}}),e._v(" "),e._m(8),e._v(" "),r("p",[e._v("SiteWhere 2.0 uses Docker as the core deployment model, so the deployment\nartifacts from the build process are Docker images. In order to have a local\nrepository and APIs available for the build scripts to interact with, install\na local copy of Docker Engine as explained below:")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://docs.docker.com/engine/installation/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Install Docker Engine"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("Verify that Docker Engine has been installed successfully by running the command\nbelow:")]),e._v(" "),r("InlineImage",{attrs:{src:"/images/development/docker-engine-version.png",caption:"Docker Engine Version"}}),e._v(" "),r("p",[e._v("Configure the Docker daemon is to listen on TCP port 2375. This is the default API\nport, but most installations do not enable the port by default. An example of the\nrequired update for Ubuntu 16.04 can be found\n"),r("a",{attrs:{href:"https://www.ivankrizsan.se/2016/05/18/enabling-docker-remote-api-on-ubuntu-16-04/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),r("OutboundLink")],1),e._v(".")]),e._v(" "),e._m(9),e._v(" "),r("p",[e._v("The root folder of the source code contains a "),r("a",{attrs:{href:"https://gradle.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gradle"),r("OutboundLink")],1),e._v(" build\nscript ("),r("em",[e._v("build.gradle")]),e._v(") that compiles the Java code, packages it into Docker images, then pushes\nthe images to a Docker repository. By default, the Gradle script will attempt to\npush the images to a repository running on "),r("em",[e._v("localhost")]),e._v(". Information for another\nrepository can be added as an override by adding the following lines the\n"),r("em",[e._v("gradle.properties")]),e._v(" (or "),r("em",[e._v("~/.gradle")]),e._v(" on Unix) file in your default user directory:")]),e._v(" "),e._m(10),r("p",[e._v("SiteWhere includes Gradle "),r("a",{attrs:{href:"https://docs.gradle.org/current/userguide/gradle_wrapper.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Wrapper"),r("OutboundLink")],1),e._v("\nartifacts, so that there is no need to install Gradle independently. To build all of the core\nlibraries, package the microservices into Docker images and push them into your local\nrepository, execute the following command.")]),e._v(" "),e._m(11),r("p",[e._v("The first time the build executes will take significantly longer since Gradle\nmust download all of the dependencies and cache them for later use. When\nthe build script completes, execute the following command to view the\nlist of Docker images which should now include images for all of the\nSiteWhere microservices:")]),e._v(" "),r("InlineImage",{attrs:{src:"/images/development/docker-image-list.png",caption:"Docker Image List"}}),e._v(" "),e._m(12),e._v(" "),r("p",[e._v("In addition to the standard microservice images, the Gradle build may be parameterized\nto generate debug images which expose a port for remote Java debugging. In order to\ngenerate debug images, execute the following command:")]),e._v(" "),e._m(13),e._m(14),e._v(" "),r("p",[e._v("Read "),r("router-link",{attrs:{to:"./debug.html"}},[e._v("this")]),e._v(" to connect a debugger to SiteWhere.")],1),e._v(" "),e._m(15),e._v(" "),r("p",[e._v("Now that Docker images have been generated for the microservices, follow the steps in the\ndeployment guide to use SiteWhere recipes that assemble the microservices into a working\ninstance.")])],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"sitewhere-development-guide"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sitewhere-development-guide","aria-hidden":"true"}},[this._v("#")]),this._v(" SiteWhere Development Guide")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"accessing-source-code-on-github"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#accessing-source-code-on-github","aria-hidden":"true"}},[this._v("#")]),this._v(" Accessing Source Code on GitHub")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"branch-structure-for-repository"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#branch-structure-for-repository","aria-hidden":"true"}},[this._v("#")]),this._v(" Branch Structure for Repository")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("New functionality is always developed in a separate branch and is\neventually merged to "),t("em",[this._v("master")]),this._v(" as part of the release cycle.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"pulling-source-code-from-github"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pulling-source-code-from-github","aria-hidden":"true"}},[this._v("#")]),this._v(" Pulling Source Code From GitHub")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("git clone https://github.com/sitewhere/sitewhere.git\ncd sitewhere\ngit checkout --force sitewhere-2.0.0\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"building-from-source"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#building-from-source","aria-hidden":"true"}},[this._v("#")]),this._v(" Building from Source")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"install-java-8"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-java-8","aria-hidden":"true"}},[this._v("#")]),this._v(" Install Java 8")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"install-docker-engine"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-docker-engine","aria-hidden":"true"}},[this._v("#")]),this._v(" Install Docker Engine")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"execute-gradle-build-script"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#execute-gradle-build-script","aria-hidden":"true"}},[this._v("#")]),this._v(" Execute Gradle Build Script")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"language-properties extra-class"},[r("pre",{pre:!0,attrs:{class:"language-properties"}},[r("code",[r("span",{attrs:{class:"token attr-name"}},[e._v("dockerProtocol")]),r("span",{attrs:{class:"token punctuation"}},[e._v("=")]),r("span",{attrs:{class:"token attr-value"}},[e._v("tcp")]),e._v("\n"),r("span",{attrs:{class:"token attr-name"}},[e._v("dockerHostname")]),r("span",{attrs:{class:"token punctuation"}},[e._v("=")]),r("span",{attrs:{class:"token attr-value"}},[e._v("192.168.171.100")]),e._v("\n"),r("span",{attrs:{class:"token attr-name"}},[e._v("dockerPort")]),r("span",{attrs:{class:"token punctuation"}},[e._v("=")]),r("span",{attrs:{class:"token attr-value"}},[e._v("2375")]),e._v("\n"),r("span",{attrs:{class:"token attr-name"}},[e._v("dockerRepository")]),r("span",{attrs:{class:"token punctuation"}},[e._v("=")]),r("span",{attrs:{class:"token attr-value"}},[e._v("docker.io")]),e._v("\n"),r("span",{attrs:{class:"token attr-name"}},[e._v("registryUsername")]),r("span",{attrs:{class:"token punctuation"}},[e._v("=")]),r("span",{attrs:{class:"token attr-value"}},[e._v("(your docker username)")]),e._v("\n"),r("span",{attrs:{class:"token attr-name"}},[e._v("registryPassword")]),r("span",{attrs:{class:"token punctuation"}},[e._v("=")]),r("span",{attrs:{class:"token attr-value"}},[e._v("(your docker password)")]),e._v("\n"),r("span",{attrs:{class:"token attr-name"}},[e._v("registryEmail")]),r("span",{attrs:{class:"token punctuation"}},[e._v("=")]),r("span",{attrs:{class:"token attr-value"}},[e._v("(your docker email address)")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("gradlew clean dockerImage\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"creating-debug-images"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#creating-debug-images","aria-hidden":"true"}},[this._v("#")]),this._v(" Creating Debug Images")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("gradlew clean dockerImage -Pdebug\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The debug images use a version identifier prefixed with "),t("em",[this._v("debug-")]),this._v(" to prevent confusing\nthem with non-debug images. Note that there is a separate SiteWhere recipe for running\nthe debug Docker images since the debug port for each microservice must be remapped\nto a different port. Using the debug images allows you to connect from a remote debugger\n(such as the one in Eclipse) and set breakpoints in the running microservices.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"next-steps"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#next-steps","aria-hidden":"true"}},[this._v("#")]),this._v(" Next Steps")])}],!1,null,null,null);n.options.__file="README.md";t.default=n.exports}}]);