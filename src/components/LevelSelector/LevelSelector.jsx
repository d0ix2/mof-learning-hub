import { LevelContainer, LevelButton } from "./LevelSelector.style";

function LevelSelector({
  selectedLevel,
  onLevelChange,
  isLoading,
  systemPrompt,
}) {
  const levels = Object.values(systemPrompt);

  return (
    <LevelContainer>
      {levels.map((level) => (
        <LevelButton
          key={level.key}
          onClick={() => onLevelChange(level.key)}
          $isSelected={selectedLevel === level.key}
          disabled={isLoading}
        >
          {level.label}
        </LevelButton>
      ))}
    </LevelContainer>
  );
}

export default LevelSelector;
