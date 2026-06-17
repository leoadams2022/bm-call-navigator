export const stages = {
  hello: {
    id: "hello",
    title: "Greeting",
    script: (
      <div>
        Hi there, this is Leo Adams with Beyond Menu, how are you today?
        <div className="flex gap-3 mt-6">
          <div className="space-y-3">
            <h1 className="px-2 py-1 bg-yellow-600/50 text-black font-bold rounded-lg">
              Have DM Name
            </h1>
            <p>
              I'm looking to speak with{" "}
              <span className="bg-yellow-500/50">[DM Name]</span>, is he/she
              available for a quick 15 seconds?
            </p>
            <div className="space-y-3">
              <h1 className="px-2 py-1 bg-yellow-600/50 text-black font-bold rounded-lg">
                Wrong Person
              </h1>
              <p>No problem, maybe you can still help me out here.</p>
            </div>
          </div>
          <div className=" space-y-3">
            <h1 className="px-2 py-1 bg-yellow-600/50 text-black font-bold rounded-lg">
              Need DM Name
            </h1>
            <p>
              The reason I'm calling is that I wanted to extend an invitation to{" "}
              <span className="bg-yellow-500/50">[Business Name]</span> to be{" "}
              <span className="inline-flex flex-col">
                <span>part of our business network.</span>
                <span className=" text-gray-500">featured on our app.</span>
              </span>
              <br />
              <span className="mt-4 inline-block">
                Who would be the best person to talk to about that?
              </span>
            </p>
          </div>
        </div>
      </div>
    ),

    // checklist: ["Get Access to DM", "DM Identified"],

    actions: [
      {
        label: "DM On Phone",
        next: "dm_intro",
        color: "green",
      },

      {
        label: "DM Not Available",
        next: "callback",
        color: "red",
      },
    ],
  },

  callback: {
    id: "callback",
    title: "Set Callback",

    script: (
      <div>
        <p>
          No worries, I can call back later for sure.
          <br /> when is he/she usually in the resturant?
          <br />
          Perfect. And just so I don't bother the wrong person, he/she is the
          best person to speak with regarding restaurant growth and online
          ordering?
          <br />
          Great, I'll call back{" "}
          <span className="bg-yellow-500/50">[DATE/TIME]</span>.<br /> Who
          should I ask for?
          <br />
          alright thank you for your help{" "}
          <span className="bg-yellow-500/50">[GK Name]</span> again im Leo with
          Beyond Menu and I look forward to speaking with you and{" "}
          <span className="bg-yellow-500/50">[DM Name]</span> on{" "}
          <span className="bg-yellow-500/50">[DATE/TIME]</span>
        </p>
      </div>
    ),

    checklist: ["DM Identified", "Set A Callback"],

    actions: [
      {
        label: "End Call as Callback Scheduled",
        next: "completed_callback",
      },
    ],
  },

  dm_intro: {
    id: "dm_intro",
    title: "DM Introduction",

    script: (
      <div>
        <p>
          Hi, how are you doing today?
          <br /> My name is Leo Adams Im with Beyond Menus I was interested in
          extending an invitation to{" "}
          <span className="bg-yellow-500/50">[Restaurant Name]</span> to be part
          of our network (featured on our app) and I was told you were the right
          person to talk to.
          <br /> Are you familiar with Beyond Menu?
        </p>
      </div>
    ),

    checklist: ["Get Access to DM", "DM Identified", "DM Reached"],

    actions: [
      {
        label: "Yes - Familiar",
        next: "bm_known",
      },
      {
        label: "No - Not Familiar",
        next: "bm_unknown",
        color: "green",
      },
    ],
  },

  bm_unknown: {
    id: "bm_unknown",
    title: "BeyondMenu Not Known",

    script: (
      <div>
        <p>
          I know you're probably busy right now, so I'll just give you a quick
          15 second run down so you know why I'm calling and after maybe we can
          set up another time to talk.
          <br />
          Beyond Menu started over 10 years ago and we have grown to include
          over 15,000 restaurants.
          <br />
          We help customers find restaurants like yours.
          <br />
          and we have over 12 million active customers who are always looing for
          new places to order from.
          <br />
          and acualy We are expanding into{" "}
          <span className="bg-yellow-500/50">[CITY AREA]</span> so are looking
          to parner with the most desirable restaurants in the area.
          <br />
          We currently work with places like{" "}
          <span className="bg-yellow-500/50">
            [LOCAL RESTAURANT 1]
          </span> and{" "}
          <span className="bg-yellow-500/50">[LOCAL RESTAURANT 2]</span> you
          might be familiar with.
          <br />I did some research on{" "}
          <span className="bg-yellow-500/50">[RESTAURANT NAME]</span> and
          thought Beyond Menu would be a great fit for you thats is way i want
          to extend an invitation.
        </p>
      </div>
    ),

    checklist: [
      "Get Access to DM",
      "DM Identified",
      "DM Reached",
      "Show Value",
    ],

    actions: [
      {
        label: "Move To Schedule",
        next: "schedule",
        color: "green",
      },
      {
        label: "Meeting Declined",
        next: "closed_lost",
        color: "red",
      },
    ],
  },

  bm_known: {
    id: "bm_known",
    title: "BeyondMenu Familiar",

    script: (
      <div>
        <p>
          Great. How have you experienced it in the past?{" "}
          <span className="bg-yellow-500/50">[LET THEM SPEAK]</span>
        </p>
        <p className="mt-4">
          will We've grown now to include over 12 million diners, which has
          increased the demand we are seeing for restaurants like yours. I did
          some research on{" "}
          <span className="bg-yellow-500/50">[RESTAURANT NAME]</span> and felt
          like it could be a really great fit.
          <br /> I wanted to get in touch with you first before I reached out to
          any competitors nearby.
        </p>
      </div>
    ),

    checklist: [
      "Get Access to DM",
      "DM Identified",
      "DM Reached",
      "Show Value",
    ],

    actions: [
      {
        label: "Move To Schedule",
        next: "schedule",
        color: "green",
      },
    ],
  },

  schedule: {
    id: "schedule",
    title: "Schedule Meeting",

    script: (
      <div>
        <p>
          I know I am calling you out of the blue and probably caught you when
          you are in the middle of something else.
          <br />
          so Is there a good time for you to set up a 10-15 minute conversation
          so we can go into the network in a little more detail <br />
          Does tomorrow at <span className="bg-yellow-500/50">[TIME]</span>{" "}
          works for you?
        </p>
      </div>
    ),

    checklist: [
      "Get Access to DM",
      "DM Identified",
      "DM Reached",
      "Show Value",
      "Schedule Meeting",
    ],

    actions: [
      {
        label: "Confirm Access",
        next: "confirm_access",
        color: "green",
      },
      {
        label: "Meeting Declined",
        next: "closed_lost",
        color: "red",
      },
    ],
  },

  confirm_access: {
    id: "confirm_access",
    title: "Confirm Decision Process",

    script: (
      <div>
        <p>
          And just to confirm, are you the only one who would make this type of
          decision for the business, or is there anyone else we need to include
          in the conversation?
        </p>
      </div>
    ),

    checklist: [
      "Get Access to DM",
      "DM Identified",
      "DM Reached",
      "Show Value",
      "Schedule Meeting",
      "Confirm Access",
    ],

    actions: [
      {
        label: "Get Contact Info (Only One DM Involved)",
        next: "contact_info",
        color: "green",
      },
      {
        label: "Get DM Contact Info (Additional DM Involved)",
        next: "additional_dm",
        color: "yellow",
      },
    ],
  },

  additional_dm: {
    id: "additional_dm",
    title: "Additional Stakeholder",

    script: (
      <div>
        <p>Okay cool, what's the best way for me to get in touch with them? </p>
        <div className="space-y-3 mt-4">
          <h1 className="px-2 py-1 bg-yellow-600/50 text-black font-bold rounded-lg">
            If they don't want to give contact info for the other decision maker
            make sure they are a champion
          </h1>
          <p>
            okay just so i make sure i understand correctly.
            <br /> everything goes through you first before we can get in touch
            with anyone else and you are the best person to run this through
            first right ?
          </p>
        </div>
      </div>
    ),

    checklist: [
      "Get Access to DM",
      "DM Identified",
      "DM Reached",
      "Show Value",
      "Schedule Meeting",
      "Confirm Access",
      "Confirm Schedule",
    ],

    actions: [
      {
        label: "Call Complete",
        next: "completed",
        color: "green",
      },
    ],
  },

  contact_info: {
    id: "contact_info",
    title: "Capture Contact Information",

    script: (
      <div>
        <p>
          Great, I'll send you a calendar invite for{" "}
          <span className="bg-yellow-500/50">[DATE/TIME]</span>.<br /> What's a
          good email for you?
          <br /> Perfect, and I don't want to hold up the business line, what's
          a better number to reach you at?
          <div className="space-y-3 mt-4">
            <h1 className="px-2 py-1 bg-yellow-600/50 text-black font-bold rounded-lg">
              If they don't want to give email or phone
            </h1>
            <p>
              I completely understand. I just want to make sure I can reach you
              directly since I know things can get busy at the restaurant.
              <br />
              <span className="bg-yellow-500/50">
                [if still don't want to give email or phone move to call
                complete]
              </span>
            </p>
          </div>
          <br /> Great, looking forward to speaking with you for 10-15 minutes
          on <span className="bg-yellow-500/50">[DATE/TIME]</span>.
        </p>
      </div>
    ),

    checklist: [
      "Get Access to DM",
      "DM Identified",
      "DM Reached",
      "Show Value",
      "Schedule Meeting",
      "Confirm Access",
      "Capture Contact Info",
    ],

    actions: [
      {
        label: "Call Complete",
        next: "completed",
        color: "green",
      },
      {
        label: "Meeting Declined",
        next: "closed_lost",
        color: "red",
      },
    ],
  },

  completed: {
    id: "completed",
    title: "Meeting Scheduled",

    script: `Meeting booked successfully.`,

    checklist: [
      "Get Access to DM",
      "DM Identified",
      "DM Reached",
      "Show Value",
      "Schedule Meeting",
      "Confirm Access",
      "Capture Contact Info",
      "Confirm Schedule",
    ],

    actions: [],
  },

  completed_callback: {
    id: "completed_callback",
    title: "Callback Scheduled",

    script: `Callback date and time secured.`,

    checklist: ["Get Access to DM", "DM Identified", "Set A Callback"],

    actions: [],
  },

  closed_lost: {
    id: "closed_lost",
    title: "Call Ended",

    script: `Prospect declined meeting.`,

    checklist: [],

    actions: [],
  },
};
