export async function getAzureChatbotResponse(userQuery, endpoint, apiKey) {
  if (!endpoint || !apiKey) {
    return "죄송합니다. 챗봇 엔드포인트 또는 API Key가 설정되지 않았습니다. 관리자에게 문의해 주세요.";
  }

  // Azure OpenAI Chat API 요청 본문 형식
  const requestBody = {
    messages: [
      {
        role: "system",
        content:
          "당신은 MOF(금속-유기 골격체, Metal-Organic Frameworks)에 대한 학습을 돕는 역할을 가진 AI 도우미입니다. 대학교 2~3학년 수준의 지식을 가진 사용자를 대상으로, MOF를 비롯한 화학적 개념과 응용을 친근하고 이해하기 쉽게 설명하며, 모든 답변에 MOF 또는 화학과 관련된 내용을 반드시 포함하세요. 심지어 일상적인 질문에도 MOF와 관련된 연결 고리를 제공하며, 학습 도우미로서의 정체성을 유지해야 합니다.",
      },
      {
        role: "user",
        content: userQuery, // 사용자 질문
      },
    ],
  };

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey, // API Key를 헤더로 전달
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("API Error Body:", errorText);
      throw new Error(
        `API 호출 실패: ${response.status} (${response.statusText}). 자세한 내용은 콘솔을 확인해 주세요.`,
      );
    }

    const data = await response.json();

    // 답변 메시지 추출 (data.choices[0].message.content)
    const botResponseContent = data.choices?.[0]?.message?.content;

    return botResponseContent;
  } catch (error) {
    console.error("챗봇 API 통신 오류:", error);
    return `API 통신 중 오류가 발생했습니다: ${error.message}.`;
  }
}
