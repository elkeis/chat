<script lang="typescript">

</script>

<style type="text/scss">
  .chat-layout {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: white;

    & > .header {
      min-height: 75px;
      border-bottom: 1px solid rgb(218, 218, 218);
    }

    & > .chat {
      height: 100%;
      border-bottom: 1px solid  rgb(218, 218, 218);
      overflow-y: scroll;
    }

    & > div {
      box-sizing: border-box;
    }
  }
</style>

<div class="chat-layout">
  <div class="header">
    <slot name="header"></slot>
  </div>
  <div class="chat">
    <slot name="chat"></slot>
  </div>
  <div class="controls">
    <slot name="controls"></slot>
  </div>
</div>
