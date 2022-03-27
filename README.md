# 퍼블리셔를 위한 vue

### 기본
1. nvm 사용(node 버전 관리) - 프런트엔드 라이브러리버전마다 지원하는 node버전이 다를 수 있음 
    ([window용](https://velog.io/@ejchaid/%EC%9C%88%EB%8F%84%EC%9A%B0%EC%97%90%EC%84%9C-nvm-%EC%84%A4%EC%B9%98))
2. vscode 확장프로그램
    - Vetur
    - Vue 3 Snippets
    - Night Owl
    - Material Icon Theme
    - Live Server
    - ESLint
    - Prettier
    - Auto Close Tag
    - Auto Rename Tag
    - Atom Keymap
    - html css support
    - highlight matching
    - css peek
    - javascript(ES6) code snippet
3. 크롬 확장프로그램
    - [Vue.js devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
<hr/>

### VUE CLI
1. 기본설치
- vue 개발 환경을 설정해주는 도구, vue --version(버전확인)
- 예시는 10.16.3 노드버전, vue2입니다.
<pre>
<code>
# install
npm install -g @vue/cli
# OR
yarn global add @vue/cli

# update
npm update -g @vue/cli
# OR
yarn global upgrade --latest @vue/cli

# vue 생성
vue create [프로젝트명]
</code>
</pre>
2. 기본 라우터
    - vue-router@3.1.3
    - code 스플리팅(페이지 진입시 해당 페이지만 가져옴 - 네트워크 탭에서 확인)
<pre>
<code>
#. Hash mode(기본)
Hash mode는 모든 URL을 HASH(#) 형태로 서비스합니다. 
URL이 변경될 때 페이지가 다시 로드 되지 않는다.

#. History mode
페이지를 다시 로드하지 않고 URL을 탐색할 수 있습니다.
SPA의 단일 페이지 클라이언트앱이기 때문에 사용자가 직접 http://example.ocm/user/id에 접속하면 404 오류가 발생합니다.
</code>
</pre>
4. views에 page생성 및 components 작성(vue-tools로 확인가능)
5. scss설치
6. webpack, prettier, eslint, vue config등등
[설치](https://joshua1988.github.io/web-development/vuejs/boost-productivity/)
<pre>
<code>
1. 화면 ESLint overlay 나오지 않게 하는법
vue.config.js파일에 작성
module.exports = {
    devServer: {
        overlay: false
    }
}

2. resolve로 절대경로로 대체
jsconfig.js
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "~/*": [
        "./*"
      ],
      "@/*": [
        "./src/*"
      ],
    }
  },
  "exclude": [
    "node_modules",
    "dist"
  ]
}
</code>
</pre>
<hr/>

### VUE NUXT
1. nuxt 로 설치(nuxt정의)
2. 샘플 페이지 작성(HTML로) - Flagment설명
3. 에러, 공통 페이지
4. 리액티브 data 정의
5. v-if, v-else v-html, {{ }}, v-clock(SPA)등등
6. v-for 및 가상데이터
7. v-directory, filter처리(npm 설치및 기타 npm 사용)
8. 이벤트 핸들링 및 이벤트 장식자
9. 인스턴스 속성(ref 및 refs, $props, $el 등등) - 
    [Vue](https://v3.ko.vuejs.org/api/instance-properties.html)
10. lifecycle 훅(watcher, mounted, )
11. components작성(부모-자식-형제) - $emit, $nextTick 등등
12. v-model(양방향 처리) - 검색
13. 내장 컴포넌트(keep-alive, slot 등등)
<hr/>

14. env, process 파일 설정
15. axios를 이용한 데이터 처리
16. 간단한 store 및 vuex
17. swegger 사용법

<hr/>

