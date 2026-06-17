hello
│
├── DM On Phone
│ ↓
│ dm_intro
│ │
│ ├── Familiar
│ │ ↓
│ │ bm_known
│ │ ↓
│ │ schedule
│ │
│ └── Not Familiar
│ ↓
│ bm_unknown
│ ↓
│ schedule
│
└── DM Not Available
↓
callback
↓
completed_callback

---

Scheduling branch:

schedule
↓
confirm_access
│
├── Only DM
│ ↓
│ contact_info
│ ↓
│ completed
│
└── Additional Stakeholder
↓
additional_dm
↓
completed

---

Loss paths:

bm_unknown
↓
closed_lost

schedule
↓
closed_lost

contact_info
↓
closed_lost
