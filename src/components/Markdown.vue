<template>
<div id="editor">
  <textarea :value="input" @input="update"></textarea>
  <div v-html="compiledMarkdown" class="markediv"></div>
</div>
</template>

<script>
import marked from 'marked';

export default {
  name: 'editor',
  data () {
    return {
      input: '# hello'
    }
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.input, { sanitize: true })
    }
  },
  methods: {
    update: function (e) {
      this.input = e.target.value
    }, 
  }
}
</script>

<style scroped> 

html, body, #editor {
  margin: 0;
  height: 580px;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  color: #333;
}

textarea, #editor div {
  display: inline-block;
  width: 49%;
  height: 100%;
  vertical-align: top;
  box-sizing: border-box;
  padding: 0 20px;
  float: left;
}

textarea {
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: 'Monaco', courier, monospace;
  padding: 20px;
}
.markediv{
  float:left;
  width:49%;
  height:100%;

}
code {
  color: #f66;
}
</style>