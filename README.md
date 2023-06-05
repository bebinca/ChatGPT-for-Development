# ChatGPT for Development

This is a chatGPT API example built by React. 

## How to use

If you are new to this project, run: 

```
npm install
```

Then: 

```
npm start
```

## Config

 * **accessToken**: open https://chat.openai.com/chat and login with your own account. Then open development tool(F12) - Network, find /api/auth/session, you can see your accessToken. 

 * **model**: `gpt-3.5-turbo` in default. You can use `gpt-4` if your account is ChatGPT Plus. 

 * **conversationId**: optional. Returned in the previous request. Used for context continuous sessions. 

 * **parentMessageId**: optional. Returned in the previous request. Used for context continuous sessions. 

 * **reverseProxy**: optional. Used to bypass cloudflare captcha. 

    * https://ai.fakeopen.com/api/conversation (default)

    * https://api.pawan.krd/backend-api/conversation

 * **timeout**: optional. default infinite wait (0). 
 