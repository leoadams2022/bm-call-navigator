export const stages = {
  hello: {
    id: "hello",
    title: "Greeting",
    script: (
      <div>
        Hi there, this is Leo Adams with Beyond Menu, how are you today?
        <div className="flex gap-3 mt-6">
          <div className="space-y-3">
            <h1 className="px-2 py-1 bg-yellow-500/40 dark:bg-yellow-900/40 text-black dark:text-yellow-200 font-bold rounded-lg">
              Have DM Name
            </h1>
            <p>
              I'm looking to speak with{" "}
              <span className="bg-yellow-500/40 dark:bg-yellow-900/40 text-black dark:text-yellow-200 px-1 rounded">
                [DM Name]
              </span>
              , is he/she available for a quick 15 seconds?
            </p>
            <div className="space-y-3">
              <h1 className="px-2 py-1 bg-yellow-500/40 dark:bg-yellow-900/40 text-black dark:text-yellow-200 font-bold rounded-lg">
                Wrong Person
              </h1>
              <p>No problem, maybe you can still help me out here.</p>
            </div>
          </div>
          <div className=" space-y-3">
            <h1 className="px-2 py-1 bg-yellow-500/40 dark:bg-yellow-900/40 text-black dark:text-yellow-200 font-bold rounded-lg">
              Need DM Name
            </h1>
            <p>
              The reason I'm calling is that I wanted to extend an invitation to{" "}
              <span className="bg-yellow-500/40 dark:bg-yellow-900/40 text-black dark:text-yellow-200 px-1 rounded">
                [Business Name]
              </span>{" "}
              to be{" "}
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
          <span className="bg-yellow-500/40 dark:bg-yellow-900/40 text-black dark:text-yellow-200 px-1 rounded">
            [DATE/TIME]
          </span>
          .<br /> Who should I ask for?
          <br />
          alright thank you for your help{" "}
          <span className="bg-yellow-500/40 dark:bg-yellow-900/40 text-black dark:text-yellow-200 px-1 rounded">
            [GK Name]
          </span>{" "}
          again im Leo with Beyond Menu and I look forward to speaking with you
          and{" "}
          <span className="bg-yellow-500/40 dark:bg-yellow-900/40 text-black dark:text-yellow-200 px-1 rounded">
            [DM Name]
          </span>{" "}
          on{" "}
          <span className="bg-yellow-500/40 dark:bg-yellow-900/40 text-black dark:text-yellow-200 px-1 rounded">
            [DATE/TIME]
          </span>
        </p>
      </div>
    ),

    checklist: ["DM Identified", "Set A Callback"],

    actions: [
      {
        label: "End Call as Callback Scheduled",
        next: "completed_callback",
      },
      // {
      //   label: "Objection",
      //   next: "objection_selector",
      //   color: "yellow",
      // },
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
          <span className="bg-yellow-500/40 dark:bg-yellow-900/40 text-black dark:text-yellow-200 px-1 rounded">
            [Restaurant Name]
          </span>{" "}
          to be part of our network (featured on our app) and I was told you
          were the right person to talk to.
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
          15-second rundown so you know why I'm calling, and after maybe we can
          set up another time to talk.
          <br />
          Beyond Menu started over 10 years ago, and we have grown to include
          over 15,000 restaurants.
          <br />
          We help customers find restaurants like yours.
          <br />
          And we have over 12 million active customers who are always looking
          for new places to order from.
          <br />
          And actually, we are expanding into{" "}
          <span className="bg-yellow-500/40 dark:bg-yellow-900/40 text-black dark:text-yellow-200 px-1 rounded">
            [CITY AREA]
          </span>{" "}
          so we are looking to partner with the most desirable restaurants in
          the area.
          <br />
          We currently work with places like{" "}
          <span className="bg-yellow-500/40 dark:bg-yellow-900/40 text-black dark:text-yellow-200 px-1 rounded">
            [LOCAL RESTAURANT 1]
          </span>{" "}
          and{" "}
          <span className="bg-yellow-500/40 dark:bg-yellow-900/40 text-black dark:text-yellow-200 px-1 rounded">
            [LOCAL RESTAURANT 2]
          </span>{" "}
          you might be familiar with.
          <br />I did some research on{" "}
          <span className="bg-yellow-500/40 dark:bg-yellow-900/40 text-black dark:text-yellow-200 px-1 rounded">
            [RESTAURANT NAME]
          </span>{" "}
          and thought Beyond Menu would be a great fit for you. That is why I
          want to extend an invitation.
        </p>
      </div>
    ),

    checklist: [
      "Get Access to DM",
      "DM Identified",
      "DM Reached",
      "Value Proposition",
    ],

    actions: [
      {
        label: "Move To Schedule",
        next: "schedule",
        color: "green",
      },
      // {
      //   label: "Meeting Declined",
      //   next: "closed_lost",
      //   color: "red",
      // },
      // {
      //   label: "Objection",
      //   next: "objection_selector",
      //   color: "yellow",
      // },
    ],
  },

  bm_known: {
    id: "bm_known",
    title: "BeyondMenu Familiar",

    script: (
      <div>
        <p>
          Great. How have you experienced it in the past?{" "}
          <span className="bg-yellow-500/40 dark:bg-yellow-900/40 text-black dark:text-yellow-200 px-1 rounded">
            [LET THEM SPEAK]
          </span>
        </p>
        <p className="mt-4">
          will We've grown now to include over 12 million diners, which has
          increased the demand we are seeing for restaurants like yours. I did
          some research on{" "}
          <span className="bg-yellow-500/40 dark:bg-yellow-900/40 text-black dark:text-yellow-200 px-1 rounded">
            [RESTAURANT NAME]
          </span>{" "}
          and felt like it could be a really great fit.
          <br /> I wanted to get in touch with you first before I reached out to
          any competitors nearby.
        </p>
      </div>
    ),

    checklist: [
      "Get Access to DM",
      "DM Identified",
      "DM Reached",
      "Value Proposition",
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
          Does tomorrow at{" "}
          <span className="bg-yellow-500/40 dark:bg-yellow-900/40 text-black dark:text-yellow-200 px-1 rounded">
            [TIME]
          </span>{" "}
          works for you?
        </p>
      </div>
    ),

    checklist: [
      "Get Access to DM",
      "DM Identified",
      "DM Reached",
      "Value Proposition",
      "Schedule Meeting",
    ],

    actions: [
      {
        label: "Confirm Access",
        next: "confirm_access",
        color: "green",
      },
      // {
      //   label: "Meeting Declined",
      //   next: "closed_lost",
      //   color: "red",
      // },
      // {
      //   label: "Objection",
      //   next: "objection_selector",
      //   color: "yellow",
      // },
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
      "Value Proposition",
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
          <h1 className="px-2 py-1 bg-yellow-500/40 dark:bg-yellow-900/40 text-black dark:text-yellow-200 font-bold rounded-lg">
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
      "Value Proposition",
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
          <span className="bg-yellow-500/40 dark:bg-yellow-900/40 text-black dark:text-yellow-200 px-1 rounded">
            [DATE/TIME]
          </span>
          .<br /> What's a good email for you?
          <br /> Perfect, and I don't want to hold up the business line, what's
          a better number to reach you at?
          <div className="space-y-3 mt-4">
            <h1 className="px-2 py-1 bg-yellow-500/40 dark:bg-yellow-900/40 text-black dark:text-yellow-200 font-bold rounded-lg">
              If they don't want to give email or phone
            </h1>
            <p>
              I completely understand. I just want to make sure I can reach you
              directly since I know things can get busy at the restaurant.
              <br />
              <span className="bg-yellow-500/40 dark:bg-yellow-900/40 text-black dark:text-yellow-200 px-1 rounded">
                [if still don't want to give email or phone move to call
                complete]
              </span>
            </p>
          </div>
          <br /> Great, looking forward to speaking with you for 10-15 minutes
          on{" "}
          <span className="bg-yellow-500/40 dark:bg-yellow-900/40 text-black dark:text-yellow-200 px-1 rounded">
            [DATE/TIME]
          </span>
          .
        </p>
      </div>
    ),

    checklist: [
      "Get Access to DM",
      "DM Identified",
      "DM Reached",
      "Value Proposition",
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
      // {
      //   label: "Meeting Declined",
      //   next: "closed_lost",
      //   color: "red",
      // },
      // {
      //   label: "Objection",
      //   next: "objection_selector",
      //   color: "yellow",
      // },
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
      "Value Proposition",
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

  objection_selector: {
    id: "objection_selector",
    title: "Objection Selector",

    script: (
      <div>
        <p>
          Choose the objection that best fits the prospect's response. If none
          of the options fit, select "Other" and provide a brief description of
          the objection.
        </p>
      </div>
    ),

    actions: [
      {
        label: "Not Interested",
        next: "obj_not_interested",
      },

      {
        label: "Too Busy",
        next: "obj_too_busy",
      },

      {
        label: "Send Email",
        next: "obj_send_email",
      },

      {
        label: "Already Have Online Ordering",
        next: "obj_online_ordering",
      },

      {
        label: "Use DoorDash/UberEats",
        next: "obj_competitor",
      },

      {
        label: "How Much Does It Cost?",
        next: "obj_price",
      },

      {
        label: "Bad Experience With BM",
        next: "obj_bad_experience",
      },

      {
        label: "Never Heard Of BM",
        next: "obj_never_heard",
      },
    ],
  },

  obj_not_interested: {
    id: "obj_not_interested",
    title: "Objection: Not Interested",
    script: (
      <div className="space-y-1">
        <p>
          <h1 className="px-2 py-1 bg-yellow-500/40 dark:bg-yellow-900/40 text-black dark:text-yellow-200 font-bold rounded-lg">
            Option 1
          </h1>
          Totally fair.
          <br />
          I wasn't really expecting you to be interested yet since we haven't
          had a chance to talk.
          <br />
          Let me give you a quick 15-second overview.
        </p>

        <hr />

        <p>
          <h1 className="px-2 py-1 bg-yellow-500/40 dark:bg-yellow-900/40 text-black dark:text-yellow-200 font-bold rounded-lg">
            Option 2
          </h1>
          I completely understand.
          <br />
          Can I ask what specifically you're not interested in?
        </p>

        <hr />

        <p>
          <h1 className="px-2 py-1 bg-yellow-500/40 dark:bg-yellow-900/40 text-black dark:text-yellow-200 font-bold rounded-lg">
            Option 3
          </h1>
          I understand.
          <br />
          The reason I'm reaching out is we're expanding in your area and
          looking to partner with a few restaurants.
        </p>
      </div>
    ),

    actions: [
      {
        label: "Back To Script",
        next: "back_to_script",
        color: "green",
      },

      {
        label: "Call Ended",
        next: "closed_lost",
        color: "red",
      },
    ],
  },

  obj_too_busy: {
    id: "obj_too_busy",
    title: "Objection: Too Busy",

    script: (
      <div>
        <h1 className="px-2 py-1 bg-yellow-500/40 dark:bg-yellow-900/40 text-black dark:text-yellow-200 font-bold rounded-lg">
          Option 1 - DM is Busy
        </h1>
        I completely understand. Most restaurant owners I speak with are busy.
        That's actually why i wnat to give you a quick 15 second overview and
        after that maybe we can set up a time to talk when it's more convenient
        for you.
        <hr className="my-4" />
        <p>
          <h1 className="px-2 py-1 bg-yellow-500/40 dark:bg-yellow-900/40 text-black dark:text-yellow-200 font-bold rounded-lg">
            Option 2 - Future Time
          </h1>
          No problem at all. Sounds like today isn't ideal.
          <br /> Would tomorrow at 3 PM or 4 PM work better?
        </p>
        <hr className="my-4" />
        <p>
          <h1 className="px-2 py-1 bg-yellow-500/40 dark:bg-yellow-900/40 text-black dark:text-yellow-200 font-bold rounded-lg">
            Option 3 - Business Benefit
          </h1>
          I understand. A lot of the owners we work with were looking for ways
          to save time and automate parts of their operation.
          <br />
          Would tomorrow be a better time to discuss it?
        </p>
      </div>
    ),

    actions: [
      {
        label: "Back To Script",
        next: "back_to_script",
        color: "green",
      },

      {
        label: "Call Ended",
        next: "closed_lost",
        color: "red",
      },
    ],
  },

  obj_send_email: {
    id: "obj_send_email",
    title: "Objection: Send Me An Email",

    script: (
      <div>
        <h1 className="px-2 py-1 bg-yellow-500/40 dark:bg-yellow-900/40 text-black dark:text-yellow-200 font-bold rounded-lg">
          Option 1 - Email + Meeting Absolutely
        </h1>
        I will send that over. The email gives a high-level overview. The reason
        for the 15-minute conversation is to show how it applies specifically to
        your restaurant.
        <hr className="my-4" />
        <p>
          <h1 className="px-2 py-1 bg-yellow-500/40 dark:bg-yellow-900/40 text-black dark:text-yellow-200 font-bold rounded-lg">
            Option 2 - Review Then Meet
          </h1>
          sure i will send you an email right now
          <br />
          if we set up a call tomorrow at 3 PM give you enough time to review it
          before we connect?
        </p>
        <hr className="my-4" />
        <p>
          <h1 className="px-2 py-1 bg-yellow-500/40 dark:bg-yellow-900/40 text-black dark:text-yellow-200 font-bold rounded-lg">
            <strong>Option 3 - Informational Positioning</strong>
          </h1>
          Of course. The email covers the basics.
          <br />
          The conversation is where we determine whether this would actually
          make sense for your restaurant.
        </p>
      </div>
    ),

    actions: [
      {
        label: "Back To Script",
        next: "back_to_script",
        color: "green",
      },

      {
        label: "Call Ended",
        next: "closed_lost",
        color: "red",
      },
    ],
  },

  obj_online_ordering: {
    id: "obj_online_ordering",
    title: "Objection: We Already Have Online Ordering",

    script: (
      <div>
        <h1 className="px-2 py-1 bg-yellow-500/40 dark:bg-yellow-900/40 text-black dark:text-yellow-200 font-bold rounded-lg">
          Option 1 - Customer Ownership
        </h1>
        Many of our partners already have online ordering. The difference is
        that we are focused on helping restaurants own the customer relationship
        and data instead of relying entirely on third-party platforms.
        <hr className="my-4" />
        <p>
          <h1 className="px-2 py-1 bg-yellow-500/40 dark:bg-yellow-900/40 text-black dark:text-yellow-200 font-bold rounded-lg">
            Option 2 - Direct Order Growth
          </h1>
          Thats actually good. but The difference is that we're focused on
          helping you drive additional direct orders and customer retention.
        </p>
      </div>
    ),

    actions: [
      {
        label: "Back To Script",
        next: "back_to_script",
        color: "green",
      },

      {
        label: "Call Ended",
        next: "closed_lost",
        color: "red",
      },
    ],
  },

  obj_competitor: {
    id: "obj_competitor",
    title: "Objection: We Use DoorDash / Uber Eats / Grubhub",

    script: (
      <div>
        <h1 className="px-2 py-1 bg-yellow-500/40 dark:bg-yellow-900/40 text-black dark:text-yellow-200 font-bold rounded-lg">
          Option 1 - Customer Data That's great.
        </h1>
        Many of our partners use DoorDash and Uber Eats. The difference is
        BeyondMenu helps restaurants own customer data instead of renting access
        to it.
        <hr className="my-4" />
        <p>
          <h1 className="px-2 py-1 bg-yellow-500/40 dark:bg-yellow-900/40 text-black dark:text-yellow-200 font-bold rounded-lg">
            Option 2 - Direct Orders
          </h1>
          Most of our restaurant partners use those platforms.
          <br />
          What we're helping them do is drive more direct orders through Google
          search and maps and via our app as well.
        </p>
        <hr className="my-4" />
        <p>
          <h1 className="px-2 py-1 bg-yellow-500/40 dark:bg-yellow-900/40 text-black dark:text-yellow-200 font-bold rounded-lg">
            Option 3 - Reduce Dependency
          </h1>
          A lot of our partners use third-party delivery apps.
          <br />
          What we're helping them do is reduce dependence on those channels
          while still keeping them.
        </p>
      </div>
    ),

    actions: [
      {
        label: "Back To Script",
        next: "back_to_script",
        color: "green",
      },

      {
        label: "Call Ended",
        next: "closed_lost",
        color: "red",
      },
    ],
  },

  obj_price: {
    id: "obj_price",
    title: "Objection: How Much Does It Cost?",

    script: (
      <div>
        <h1 className="px-2 py-1 bg-yellow-500/40 dark:bg-yellow-900/40 text-black dark:text-yellow-200 font-bold rounded-lg">
          Option 1 - Discovery First
        </h1>
        That's a great question. It really depends on what makes sense for your
        restaurant. The purpose of the meeting is to determine that.
        <hr className="my-4" />
        <p>
          <h1 className="px-2 py-1 bg-yellow-500/40 dark:bg-yellow-900/40 text-black dark:text-yellow-200 font-bold rounded-lg">
            Option 2 - No Commitment
          </h1>
          I'm not asking you to commit to anything today.
          <br />
          I'm simply looking to set aside 15 minutes to see if it's worth
          exploring.
        </p>
        <hr className="my-4" />
        <p>
          <h1 className="px-2 py-1 bg-yellow-500/40 dark:bg-yellow-900/40 text-black dark:text-yellow-200 font-bold rounded-lg">
            Option 3 - Informed Decision
          </h1>
          The goal of the conversation is to help you determine whether it would
          be a fit.
          <br />
          Then you can decide if it's worth moving forward.
        </p>
      </div>
    ),

    actions: [
      {
        label: "Back To Script",
        next: "back_to_script",
        color: "green",
      },

      {
        label: "Call Ended",
        next: "closed_lost",
        color: "red",
      },
    ],
  },

  obj_bad_experience: {
    id: "obj_bad_experience",
    title: "Objection: Bad Experience With BeyondMenu",

    script: (
      <div>
        <h1 className="px-2 py-1 bg-yellow-500/40 dark:bg-yellow-900/40 text-black dark:text-yellow-200 font-bold rounded-lg">
          Option 1 - Growth Story
        </h1>
        I completely understand. A lot has changed since then.
        <hr className="my-4" />
        <p>
          <h1 className="px-2 py-1 bg-yellow-500/40 dark:bg-yellow-900/40 text-black dark:text-yellow-200 font-bold rounded-lg">
            Option 2 - Increased Demand
          </h1>
          <br />
          Since then we've grown to over 12 million diners and significantly
          expanded our network.
        </p>
        <hr className="my-4" />
        <p>
          <h1 className="px-2 py-1 bg-yellow-500/40 dark:bg-yellow-900/40 text-black dark:text-yellow-200 font-bold rounded-lg">
            Option 3 - Why We're Calling Again
          </h1>
          <br />
          That's actually one of the reasons we're reaching back out.
          <br />
          The company has grown significantly and expanded its network.
        </p>
      </div>
    ),

    actions: [
      {
        label: "Back To Script",
        next: "back_to_script",
        color: "green",
      },

      {
        label: "Call Ended",
        next: "closed_lost",
        color: "red",
      },
    ],
  },

  obj_never_heard: {
    id: "obj_never_heard",
    title: "Objection: I've Never Heard Of BeyondMenu",

    script: (
      <div>
        <h1 className="px-2 py-1 bg-yellow-500/40 dark:bg-yellow-900/40 text-black dark:text-yellow-200 font-bold rounded-lg">
          Option 1 - Credibility
        </h1>
        That's completely fair. We've been helping independent restaurants for
        more than 10 years....
        <hr className="my-4" />
        <p>
          <h1 className="px-2 py-1 bg-yellow-500/40 dark:bg-yellow-900/40 text-black dark:text-yellow-200 font-bold rounded-lg">
            Option 2 - Scale
          </h1>
          No worries. We currently work with over 15,000 restaurants
          nationwide....
        </p>
        <hr className="my-4" />
        <p>
          <h1 className="px-2 py-1 bg-yellow-500/40 dark:bg-yellow-900/40 text-black dark:text-yellow-200 font-bold rounded-lg">
            Option 3 - Local Expansion
          </h1>
          That's actually one of the reasons I'm calling.
          <br />
          We're expanding into your area and introducing ourselves to local
          restaurants.
        </p>
      </div>
    ),

    actions: [
      {
        label: "Back To Script",
        next: "back_to_script",
        color: "green",
      },

      {
        label: "Call Ended",
        next: "closed_lost",
        color: "red",
      },
    ],
  },
};

export const checklistItems = [
  "Get Access to DM",
  "DM Identified",
  "Set A Callback",
  "DM Reached",
  "Value Proposition",
  "Schedule Meeting",
  "Confirm Access",
  "Capture Contact Info",
  "Confirm Schedule",
];

export const objections_actions = [
  {
    label: "Not Interested",
    next: "obj_not_interested",
  },
  {
    label: "Too Busy",
    next: "obj_too_busy",
  },
  {
    label: "Send Email",
    next: "obj_send_email",
  },
  {
    label: "Already Have Online Ordering",
    next: "obj_online_ordering",
  },
  {
    label: "Use DoorDash/UberEats",
    next: "obj_competitor",
  },
  {
    label: "How Much Does It Cost?",
    next: "obj_price",
  },
  {
    label: "Bad Experience With BM",
    next: "obj_bad_experience",
  },
  {
    label: "Never Heard Of BM",
    next: "obj_never_heard",
  },
];
