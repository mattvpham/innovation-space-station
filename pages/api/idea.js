export default function handler(req, res) {
  console.log(req);
  const { user_id, text, trigger_id } = req.body;
  res.status(200).json({
    trigger_id: trigger_id,
    view: {
      type: "modal",
      callback_id: "modal-identifier",
      title: {
        type: "plain_text",
        text: "Just a modal",
      },
      blocks: [
        {
          type: "section",
          block_id: "section-identifier",
          text: {
            type: "mrkdwn",
            text: "*Welcome* to ~my~ Block Kit _modal_!",
          },
          accessory: {
            type: "button",
            text: {
              type: "plain_text",
              text: "Just a button",
            },
            action_id: "button-identifier",
          },
        },
      ],
    },
  });
}
