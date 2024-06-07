  window.watsonAssistantChatOptions = {
    integrationID: "d6340925-af7a-4958-87d8-3b1e3dd9ee63", // The ID of this integration.
    region: "us-south", // The region your integration is hosted in.
    serviceInstanceID: "a0a3219a-2770-4fae-baf2-60645cbba268", // The ID of your service instance.
    onLoad: async (instance) => { await instance.render(); }
  };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  });
