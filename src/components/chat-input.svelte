<script lang="typescript">
  import { createEventDispatcher } from 'svelte';
  
  export let text: string;
  export let isDisabled: boolean;

  let expanderText = text;

  const dispatch = createEventDispatcher();
</script>

<style type="text/scss">
.chat-input {
    padding: 10px;

    & > .input-area {
      min-height: 20px;
      border-radius: 10px;
      box-shadow: inset 0 0 1px gray;
      padding: 15px;

      &:focus {
        outline: none;
      }
    }
}

</style>

<div class="chat-input">
  <div class="input-area" 
    contenteditable={!isDisabled} 
    on:input={e => dispatch('change', e.currentTarget.innerText)}
  >
      {text}
  </div>
</div>
