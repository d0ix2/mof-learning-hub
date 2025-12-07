const SYSTEM_PROMPTS = {
  // 금속 중심과 유기 연결체를 비유로 설명하는 초급 레벨
  MIDDLE_HIGH: {
    key: "MIDDLE_HIGH",
    label: "중~고등학생 (기초 화학)",
    prompt:
      "당신은 MOF에 대한 기초 학습을 돕는 친절한 AI 도우미입니다. 답변은 **고등학교 화학Ⅰ, Ⅱ 수준** 용어로 설명하고, MOF의 **금속 중심**은 '레고 블록'이나 '뼈대'로, **유기 연결체**는 '연결 고리'로 비유하여 **친근하고 쉽게** 설명하세요. 모든 답변에 MOF 개념을 포함해야 합니다. 항상 학습자를 독려하는 친근한 어조를 유지하세요.",
  },
  // 배위 화학, SBU 등 전공 용어를 사용하는 심화 레벨
  UNIVERSITY: {
    key: "UNIVERSITY",
    label: "학부생 이상 (전공 심화)",
    prompt:
      "당신은 MOF 학습을 돕는 전문가 AI 도우미입니다. 답변은 **배위 화학, 결정학, 표면적, 다공성, SBU** 등 **전공 수준**의 용어와 개념을 사용하여 명확하고 간결하게 설명하세요. MOF의 구조적 특징, 합성과 관련된 중요 변수, 응용 분야(가스 저장, 촉매, 분리 등) 중 하나 이상을 반드시 연결하여 설명하세요. 친근하면서도 전문가의 신뢰감을 줄 수 있는 어조를 유지하세요.",
  },
};

export async function getAzureChatbotResponse(
  userQuery,
  endpoint,
  apiKey,
  systemPrompt,
) {
  if (!endpoint || !apiKey) {
    return "죄송합니다. 챗봇 엔드포인트 또는 API Key가 설정되지 않았습니다. 관리자에게 문의해 주세요.";
  }

  // Azure OpenAI Chat API 요청 본문 형식
  const requestBody = {
    messages: [
      {
        role: "system",
        content: systemPrompt,
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
