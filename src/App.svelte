<script lang='typescript'>  
  import {onMount} from 'svelte';
  import AppLayout from './components/app-layout.svelte';
  import ChatLayout from './components/chat-layout.svelte';
  import Conversation from './components/conversation/index.svelte';
  import ChatHeader from './components/chat-header.svelte';
  import ChatInput from './components/chat-input.svelte';
  import appLayout from './stores/app-layout';

  let showSidebar = false;

  let count: number = 0;
  onMount(() => {
    const interval = setInterval(() => {
      appLayout.toggleSidebar();
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  });
</script>
  
<style type="text/scss">
  :global(body) {
    height: 100%;
    width: 100%;
    position: absolute;
    margin: 0;
    padding: 0;
  }

  .App {
    height: 100%;
    width: 100%;
  }
</style>
  
<div class="App">
  <AppLayout showSidebar={$appLayout.showSidebar}>
    <span slot="main-view">
      <ChatLayout>
        <span slot="header"><ChatHeader></ChatHeader></span>
        <span slot="chat">
          <Conversation></Conversation>
        </span>
        <span slot="controls">
          <ChatInput text="some text" isDisabled={false}></ChatInput>
        </span>
      </ChatLayout>
    </span>
    <span slot="sidebar">sidebar</span>
  </AppLayout>
</div>
  