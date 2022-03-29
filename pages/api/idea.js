export default function handler(req, res) {
  console.log(req);
  const { user_id, text, trigger_id } = req.body;
  res.status(200).json({
    trigger_id: trigger_id,
    view: JSON.stringify({
      type: "modal",
      title: {
        type: "plain_text",
        text: "Submit a helpdesk ticket",
      },
      callback_id: "submit-ticket",
      submit: {
        type: "plain_text",
        text: "Submit",
      },
      blocks: [
        {
          block_id: "title_block",
          type: "input",
          label: {
            type: "plain_text",
            text: "Title",
          },
          element: {
            action_id: "title",
            type: "plain_text_input",
          },
          hint: {
            type: "plain_text",
            text: "30 second summary of the problem",
          },
        },
        {
          block_id: "description_block",
          type: "input",
          label: {
            type: "plain_text",
            text: "Description",
          },
          element: {
            action_id: "description",
            type: "plain_text_input",
            multiline: true,
          },
          optional: true,
        },
        {
          block_id: "urgency_block",
          type: "input",
          label: {
            type: "plain_text",
            text: "Importance",
          },
          element: {
            action_id: "urgency",
            type: "static_select",
            options: [
              {
                text: {
                  type: "plain_text",
                  text: "High",
                },
                value: "high",
              },
              {
                text: {
                  type: "plain_text",
                  text: "Medium",
                },
                value: "medium",
              },
              {
                text: {
                  type: "plain_text",
                  text: "Low",
                },
                value: "low",
              },
            ],
          },
          optional: true,
        },
      ],
    }),
  });
}
