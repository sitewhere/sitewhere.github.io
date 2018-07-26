<i18n>
{
  "en": {
    "slogan": "The Open Platform for the Internet of Things",
    "btn-documentation": "Documentation",
    "btn-github": "View on GitHub",
    "btn-discord": "Community",
    "btn-get-started": "Get Started"
  },
  "ja": {
    "slogan": "インターネットのためのオープンプラットフォーム",
    "btn-documentation": "ドキュメンテーション",
    "btn-github": "GitHubで表示",
    "btn-discord": "コミュニティ",
    "btn-get-started": "開始する"
  }
}
</i18n>

<template>
  <div>
    <img class="top-dark-curve" src="../../assets/top-dark-curve.svg"></img>
    <img class="top-under-curve" src="../../assets/top-under-curve.svg"></img>
    <img class="facets" src="../../assets/facets.jpg"></img>
    <img class="top-overlay" src="../../assets/top-overlay.svg"></img>
    <img class="main-logo" src="../../assets/sitewhere-logo.svg"></img>
    <img class="logo-symbol" src="../../assets/sitewhere-symbol.svg"></img>
    <h1 class="slogan">{{ $t('slogan') }}</h1>
    <button @click="openDocumentation" class="view-docs-btn top-button mdl-button mdl-button--raised">
      <font-awesome-icon icon="book" size="lg" />
      {{ $t('btn-documentation') }}
    </button>
    <button @click="openGitHub" class="view-github-btn top-button mdl-button mdl-button--raised">
      <font-awesome-icon :icon="['fab', 'github']" size="lg" />
      {{ $t('btn-github') }}
    </button>
    <button @click="openDiscord" class="view-discord-btn top-button mdl-button mdl-button--raised">
      <font-awesome-icon :icon="['fab', 'discord']" size="lg" />
      {{ $t('btn-discord') }}
    </button>
    <button class="get-started-btn mdl-button mdl-button--raised">
      {{ $t('btn-get-started') }}
    </button>
  </div>
</template>

<script>
export default {
  data: () => ({
  }),

  methods: {
    openDocumentation: function (event) {
      window.open('https://sitewhere.io/docs/en/2.0.RC1/index.html', '_blank');
    },
    openGitHub: function (event) {
      window.open('https://github.com/sitewhere/sitewhere', '_blank');
    },
    openDiscord: function (event) {
      window.open('https://discord.gg/sq7sH7B', '_blank');
    }
  }
}
</script>

<style scoped>
.main-logo {
  position: absolute;
  top: 20px;
  left: 30px;
  height: 60px;
}
.logo-symbol {
  position: absolute;
  top: 180px;
  left: 50px;
  height: 280px;
}
.facets {
  position: absolute;
  top: 0px;
  width: 100%;
  height: 800px;
  opacity: 0.4;
}
.slogan {
  position: absolute;
  top: 210px;
  left: 300px;
  width: 500px;
  font-size: 40px;
}
.top-overlay {
  position: absolute;
  top: 0px;
  width: 100%;
  height: 600px;
}
.top-dark-curve {
  position: absolute;
  top: 0px;
  width: 100%;
  height: 600px;
}
.top-under-curve {
  position: absolute;
  top: 599px;
  width: 100%;
  height: 200px;
}
.top-button {
  background-color: #fff;
  opacity: 0.7;
}
.top-button:hover {
  opacity: 1.0;
}
.top-button:focus {
  background-color: #fff;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
}
.svg-inline--fa {
  margin-right: 4px;
  margin-left: -3px;
  vertical-align: middle;
}
.view-docs-btn {
  position: absolute;
  top: 20px;
  right: 510px;
  width: 200px;
}
.view-github-btn {
  position: absolute;
  top: 20px;
  right: 280px;
  width: 200px;
}
.view-discord-btn {
  position: absolute;
  top: 20px;
  right: 50px;
  width: 200px;
}
.get-started-btn {
  position: absolute;
  top: 360px;
  left: 300px;
  width: 220px;
  height: 40px;
  background-color: #ed0000;
  color: #fff;
  font-size: 16pt;
  opacity: 0.8;
}
.get-started-btn:hover {
  opacity: 1.0;
}
.get-started-btn:focus {
  background-color: #ed0000;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
}
</style>
