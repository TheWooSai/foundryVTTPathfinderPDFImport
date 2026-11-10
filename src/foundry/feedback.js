/** Progress bar shown while an import runs. */
export function createProgressReporter() {
  let notification;
  return (message, fraction) => {
    const pct = Math.min(Math.max(fraction, 0), 1);
    if (!notification)
      notification = ui.notifications.info(message, {
        progress: true,
        console: false,
      });
    else notification.update({ message, pct });
    if (pct >= 1) notification = undefined;
  };
}

/** Whisper an import result to the current user. */
export function notifyByChat(content) {
  return ChatMessage.create({
    whisper: [game.user.id],
    content,
    style: CONST.CHAT_MESSAGE_STYLES.OTHER,
    speaker: { alias: "PF2e PDF Import" },
  });
}
