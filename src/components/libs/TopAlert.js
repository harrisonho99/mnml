export default function TopAlert({ content, emphasized = '' }) {
  return (
    <div className='top-alert'>
      <h2>
        {content}
        <span className='top-alert-emphasized'>{emphasized}</span>
      </h2>
    </div>
  );
}
