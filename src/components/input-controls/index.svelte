<script lang="typescript">
  import ChatInput from './chat-input.svelte';
  export let onTextChange: Function = (text:string) => { console.log(text)};

</script>

<style type="text/scss">
  
</style>

<div class="input-controls">
  <div class="chat-input-container">
    <ChatInput text={inputText}>

    </ChatInput>
  </div>
  <div class="buttons-container">
    send
  </div>
</div>
