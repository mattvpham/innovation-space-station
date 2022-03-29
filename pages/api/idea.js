import axios from "axios";
import qs from "querystring";

export default async function handler(req, res) {
  console.log(req);
  const { user_id, text, trigger_id } = req.body;
  const payload = {
    token: "Uxv7HcwJhGCBO5Kz51iEMzVq",
    trigger_id: trigger_id,
    type: "modal",
    callback_id: "gratitude-modal",
    title: {
      type: "plain_text",
      text: "Gratitude Box",
      emoji: true,
    },
    submit: {
      type: "plain_text",
      text: "Submit",
      emoji: true,
    },
    close: {
      type: "plain_text",
      text: "Cancel",
      emoji: true,
    },
    blocks: [
      {
        type: "input",
        block_id: "my_block",
        element: {
          type: "plain_text_input",
          action_id: "my_action",
        },
        label: {
          type: "plain_text",
          text: "Say something nice!",
          emoji: true,
        },
      },
    ],
  };
  const result = await axios.post(`https://slack.com/api/views.open`, payload);
  console.log(result);
  res.status(200).json({ text: "Opening a form!" });
}
