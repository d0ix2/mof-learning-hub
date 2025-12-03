export async function getAzureChatbotResponse(userQuery, endpoint, apiKey) {
  if (!endpoint || !apiKey) {
    return "죄송합니다. 챗봇 엔드포인트 또는 API Key가 설정되지 않았습니다. 관리자에게 문의해 주세요.";
  }

  // Azure OpenAI Chat API 요청 본문 형식
  const requestBody = {
    messages: [
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
