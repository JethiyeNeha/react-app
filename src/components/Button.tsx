export const Button: React.FC<{
  displayMessage: string;
  handleClick?: () => void;
}> = ({ displayMessage, handleClick }) => {
  return (
    <>
      <button onClick={handleClick}>{displayMessage}</button>
    </>
  );
};
