import WidgetFeedbacks from './WidgetFeedbacks/WidgetFeedbacks';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 20,
        fontSize: 20,
        color: '#010101',
      }}
    >
      <WidgetFeedbacks initialGood={0} initialNeutral={0} initialBad={0} />
    </div>
  );
};
