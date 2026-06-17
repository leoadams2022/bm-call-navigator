export const stages = {
  start: {
    id: "start",
    title: "Gatekeeper With DM Name",
    script:
      "I'm looking to speak with [DM Name], are they available for a quick 15 seconds?",
    checklist: ["DM Identified"],
    actions: [
      {
        label: "DM Available",
        next: "dm_intro",
      },
      {
        label: "Wrong Person",
        next: "gk_without_name",
      },
      {
        label: "DM Not In",
        next: "callback",
      },
    ],
  },

  gk_without_name: {
    id: "gk_without_name",
    title: "Gatekeeper Without DM Name",
    script:
      "The reason I'm calling is that I wanted to extend an invitation to the business to be part of our network. Who would be the best person to talk to about that?",
    checklist: ["DM Identified"],
    actions: [
      {
        label: "Got DM Name",
        next: "start",
      },
    ],
  },

  callback: {
    id: "callback",
    title: "DM Not In",
    script:
      "No worries. When will they be in next? Great, I'll call back then. Who should I ask for?",
    checklist: [],
    actions: [],
  },

  dm_intro: {
    id: "dm_intro",
    title: "DM Introduction",
    script:
      "Hi, how are you doing today? My name is Leo Adams. Are you familiar with BeyondMenu?",
    checklist: ["DM Reached", "Familiarity Asked"],
    actions: [
      {
        label: "Yes",
        next: "familiar_yes",
      },
      {
        label: "No",
        next: "familiar_no",
      },
    ],
  },

  familiar_no: {
    id: "familiar_no",
    title: "15 Second Pitch",
    script:
      "BeyondMenu started over 10 years ago and has grown to over 15,000 restaurants. We help customers find restaurants like yours.",
    checklist: ["Invitation Explained"],
    actions: [
      {
        label: "Continue",
        next: "schedule",
      },
    ],
  },

  familiar_yes: {
    id: "familiar_yes",
    title: "Familiar With BeyondMenu",
    script: "Great. How have you experienced it in the past?",
    checklist: ["Invitation Explained"],
    actions: [
      {
        label: "Continue",
        next: "schedule",
      },
    ],
  },

  schedule: {
    id: "schedule",
    title: "Schedule Meeting",
    script: "Does the same time tomorrow work for you?",
    checklist: ["Schedule Attempted"],
    actions: [
      {
        label: "Meeting Booked",
        next: "contact_info",
      },
      {
        label: "Need Another Time",
        next: "schedule",
      },
    ],
  },

  contact_info: {
    id: "contact_info",
    title: "Capture Contact Info",
    script: "What's a good email? What's the best number to reach you?",
    checklist: ["Email Captured", "Phone Captured"],
    actions: [],
  },
};
