<script lang="typescript">
  interface iMessage {
    sender: {
      avatar: string,
      id: number,
      isMe: boolean,
    }
    text: string,
    date: Date,
  }

  export let value: iMessage | undefined = {
    sender: {
      avatar: 'https://www.shareicon.net/data/2016/09/01/822739_user_512x512.png',
      id: 5,
      isMe: true,
    },
    text: 'some text',
    date: new Date(),
  };
</script>

<style type="text/scss">
  .message {
    display: flex;
    flex-direction: row;
    padding: 10px;

    &.to {
      flex-flow: row-reverse;

      & > .avatar {
        margin-right: 0;
        margin-left: 10px;
      }
    }

    & > .bubble {
      padding: 10px;
      background-color: lightskyblue;
      border-radius: 10px;

      & > .time {
        font-size: 10px;
        text-align: right;
        padding-top: 5px;
      }
    }


    & > .avatar {
      height: 50px;
      width: 50px;
      border-radius: 50px;
      margin-left: 0;
      margin-right: 10px;
      background-color: lightslategrey;
      background-size: 100%;
    }
  }
</style>

<div class="message" class:to={ value?.sender.isMe }>
  <div class="avatar" style="background-image: url({value?.sender.avatar})">

  </div>
  <div class="bubble">
    <div class="text">
      {value?.text}
    </div>
    <div class="time">
      {value?.date.getHours()}:{value?.date.getMinutes()}
    </div>
  </div>
</div>
