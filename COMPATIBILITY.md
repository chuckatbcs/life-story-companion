# Life Story Companion — Compatibility

**Current public status: pre-release.**

No AI platform is being advertised as officially supported yet.

The Life Story Companion is designed as an **AI skill for use inside a compatible AI assistant**, not as a standalone assistant. Compatibility is being validated platform by platform rather than assumed from the ability to paste instructions into a chat.

## What "supported" will mean

A platform will be listed as supported only after its adapter has been tested for the parts of the workflow that matter, including:

- installation and updates;
- interview behavior and instruction following;
- files and source handling;
- project continuity and durable state where applicable;
- transcript ingestion;
- provenance and uncertainty tracking;
- privacy/data boundaries;
- export and portability;
- recovery behavior;
- known limitations.

A platform may support the Companion's interview and drafting method while still having limitations around durable cross-session state. Those limitations will be disclosed rather than hidden.

## Current validation track

An initial OpenAI plugin-format adapter has passed internal static package checks and is awaiting live installed-runtime testing.

A separate internal MCP persistence prototype has also been built to validate durable project continuity, evidence/source tracking, bounded context loading, and project export. That persistence layer is **not yet part of a public release and is not yet a supported-platform claim**.

The testing sequence is intentionally conservative:

1. validate the skill's activation and interviewing behavior;
2. validate file/source handling and evidence discipline;
3. validate durable state, export, and recovery through the persistence layer;
4. publish a compatibility claim only after the exact supported configuration passes.

The permanent availability page will be updated when a platform passes the applicable live tests and an authorized install/purchase path exists.

Permanent availability page:

`https://chuckatbcs.github.io/life-story-companion/`
