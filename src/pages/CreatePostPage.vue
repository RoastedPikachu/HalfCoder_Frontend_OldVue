<template>
  <section>
    <h1>Твой контент:</h1>
    <div id="editorjs"></div>
    <button @click="saveArticleData()">Сохранить статеечку</button>
  </section>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import EditorJS from '@editorjs/editorjs';
  import Header from '@editorjs/header';
  import Paragraph from "@editorjs/paragraph";
  import Quote from '@editorjs/quote';
  import RawTool from '@editorjs/raw';
  import CodeTool from '@editorjs/code';
  import LinkTool from '@editorjs/link';
  import NestedList from '@editorjs/nested-list';
  import Checklist from '@editorjs/checklist';
  import Delimiter from '@editorjs/delimiter';
  import AttachesTool from '@editorjs/attaches';
  import Marker from '@editorjs/marker';
  import InlineCode from '@editorjs/inline-code';

  export default defineComponent({
    name: 'CreatePostPage',
    data() {
      return {
        value: null,
        editor: new EditorJS({
          holder: 'editorjs',
          placeholder: 'Начни писать и вдохновение придёт',
          data: {
            time: 1552744582955, 
            blocks: []
          },
          tools: {
            header: Header,
            paragraph: Paragraph,
            quote: Quote,
            raw: RawTool,
            code: CodeTool,
            linkTool: LinkTool,
            list: {
              class: NestedList,
              inlineToolbar: true,
              config: {
                defaultStyle: 'unordered'
              }
            },
            checklist: {
              class: Checklist,
              inlineToolbar: true
            },
            delimiter: Delimiter,
            attaches: AttachesTool,
            marker: Marker,
            inlineCode: InlineCode
          },
          i18n: {
            messages: {
              ui: {
                'toolbar': {
                  'toolbox': {
                    'Add': 'Добавить',
                  }
                },
                'blockTunes': {
                  'toggler': {
                    'Click to tune': 'Нажмите чтобы настроить',
                    'or drag to move': 'или перетащите'
                  }
                }
              },
              toolNames: {
                'Text': 'Параграф',
                'Heading': 'Заголовок',
                'Quote': 'Цитата',
                'Raw HTML': 'HTML фрагмент',
                'Code': 'Код',
                'Link': 'Ссылка',
                'List': 'Список',
                'Checklist': 'Чеклист',
                'Delimiter': 'Разделитель',
                'Attachment': 'Файл',
              }
            }
          },
          onReady: () => {
            console.log('Editor.js is ready to work!')
          }
        })
      }
    },
    methods: {
      saveArticleData() {
        this.editor.save().then(savedData => {
          console.log(savedData);
          console.log(this.editor);
        })
      }
    },
  })
</script>

<style lang="scss" scoped>
  section {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 15%;
    width: 70%;
    height: 120vh;
    background-color: #141414;
    border: 2px solid #747474;
    border-width: 0px 2px 0px;
    h1 {
      margin-top: 50px;
      width: 50%;
      text-align: center;
      color: #ffffff;
      font-family: 'Space Grotesk', sans-serif;
    }
    div {
      padding: 2.5% 0;
      width: 80%;
      min-height: 500px;
      background-color: #fff6da;
      border-radius: 10px;
      font-size: 18px;
      font-weight: 500;
      font-family: 'Inter', sans-serif;
    }
    button {
      margin-top: 50px;
      width: 30%;
      height: 60px;
      background-color: #141414;
      border: 2px solid #747474;
      border-radius: 10px;
      color: #ffffff;
      font-size: 18px;
      transition: 500ms ease;
      cursor: pointer;
    }
    button:hover {
      transform: translateY(7.5px);
    }
  }
</style>