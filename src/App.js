import { useState } from "react";
import { ChatGPTUnofficialProxyAPI } from "chatgpt";
import "./App.css";

export default function App() {
  const [accessToken, setAccessToken] = useState("");
  const [prompt, setPrompt] = useState("");
  const [model, setModel] = useState("gpt-3.5-turbo");
  const [conversationId, setConversationId] = useState("");
  const [parentMessageId, setParentMessageId] = useState("");
  const [reverseProxy, setReversePxoxy] = useState("https://ai.fakeopen.com/api/conversation");
  const [timeout, setTimeout] = useState(0);
  const [result, setResult] = useState("");

  const sendRequest = async () => {
    if (!accessToken || !prompt) {
      throw new Error("invalid [access_token] or [prompt]");
    }
    const chatgpt = new ChatGPTUnofficialProxyAPI({
      accessToken: accessToken,
      apiReverseProxyUrl: reverseProxy,
      model,
    });
    const response = await chatgpt.sendMessage(prompt, {
      conversationId: conversationId,
      parentMessageId: parentMessageId,
      timeoutMs: Number(timeout),
    });
    setResult(JSON.stringify(response))
  };

  return (
    <div className="App" style={{ padding: 10 }}>
      <div>
        accessToken{": "}
        <input value={accessToken} onChange={(e) => setAccessToken(e.target.value)} />
      </div>
      <div>
        model{": "}
        <input value={model} onChange={(e) => setModel(e.target.value)} />
      </div>
      <div>
        conversationId{": "}
        <input value={conversationId} onChange={(e) => setConversationId(e.target.value)} />
      </div>
      <div>
        parentMessageId{": "}
        <input value={parentMessageId} onChange={(e) => setParentMessageId(e.target.value)} />
      </div>
      <div>
        reverseProxy{": "}
        <input value={reverseProxy} onChange={(e) => setReversePxoxy(e.target.value)} />
      </div>
      <div>
        timeout{": "}
        <input value={timeout} onChange={(e) => setTimeout(e.target.value)} />
      </div>
      <div>
        prompt{": "}
        <input value={prompt} onChange={(e) => setPrompt(e.target.value)} />
      </div>
      <button onClick={sendRequest}>Submit</button>
      <div style={{ padding: 10, display: "flex", justifyContent: "center" }}>
        <div style={{ width: "50%", height: 200, borderRadius: 5, border: "1px solid #ccc" }}>{result}</div>
      </div>
    </div>
  );
}
