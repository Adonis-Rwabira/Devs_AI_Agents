# Devs AI Agents

Welcome to the **Devs AI Agents** repository !
This project is an invitation to all developers, architects, and software engineers aspiring to transcend a sometimes hesitant use of Artificial Intelligence, to engage in a **strategic, controlled, and highly productive collaboration**.

We provide you with a **complete and proven methodology**, accompanied by an arsenal of **system prompts (custom instructions) of expert level**, ready to be deployed to configure highly specialized AI agents. These agents are not just tools, but true partners designed to assist you with unparalleled proactivity and expertise during the critical and decisive phases of **holistic planning, detailed design, and rigorous implementation** of your software projects.

Our fundamental mission is to equip you to **tame AI** – that is, to overcome the frustrations and limitations too often associated with poorly understood or underutilized AI – and to exploit its full and true potential to **catalyze your productivity, elevate the quality of your achievements to a higher level, and instill a new dimension of strategic thinking and serenity** in your development lifecycle.

> **Author:** Adonis Rwabira  
*Full stack Developer and Software Engineer*  
*adonisbitigaywa@gmail.com*  

## Repository Resources

This repository is the **operational companion and practical toolbox** for our **in-depth, 9-part article series** (available in full in the [`/articles/en/`](./articles/en/) folder) titled: **"Tame AI and Boost Your Productivity"**. For a complete assimilation of the underlying philosophy, a deep understanding of the detailed methodological steps, and a mastery of the best practices of this collaborative approach, careful reading of this series is **very strongly recommended**.

Within this repository, you will discover a set of strategic resources:

1.  **Expert System Prompts for AI Agents (viewable in [`/prompts/en/`](./prompts/en/))**: These are the "brains" of your future AI partners.
    *   `AGENT_SENIOR_SOLUTION_ARCHITECT_EN.md`: The complete and meticulously designed system prompt to configure your **"Senior Solution Architect & Adaptive Partner"** AI agent. This agent is your strategic co-designer and master builder for **Phase 1: Holistic Planning and Design Excellence** (requirements elicitation and formalization, technical and software architecture, UI/UX specification with image analysis, data modeling).
    *   `AGENT_SENIOR_COLLABORATIVE_DEVELOPER_EN.md`: The exhaustive system prompt to configure your **"Senior Collaborative Full-Stack Developer"** AI agent. This agent is your elite technical partner and co-craftsman for **Phase 2: Collaborative Implementation and Superior Quality Code Production** (coding, proactive code review, test design, technical documentation, change management).
    *   `AGENT_PROMPT_REFINEMENT_ANALYST_EN.md`: The system prompt for a specialized agent, for retrospective analysis of interactions and suggestion of targeted improvements for the operational agents' prompts.
2.  **Example Configuration File for Kilo Code (viewable in [`/settings/`](./settings/))**:
    *   `kilo_code_settings.json`: An example file illustrating a possible structure for certain global parameters of the VS Code extension [Kilo Code](https://kilocode.ai/).
3.  **Illustrative Examples of Deliverables and Artifacts (viewable in [`/examples/en/`](./examples/en/))**:
    *   This folder, which will grow over time, is intended to provide you with **concrete and illustrative examples** of the types of documents and artifacts produced using this methodology. You will find fragments of functional specifications, excerpts of architecture documents, examples of agent action plans, snippets of implementation logs, etc.
    *   It will also contain **examples of source code for Mermaid or PlantUML diagrams**, which the GitHub platform can display directly, thus offering you a tangible visualization of certain aspects of the design (architecture, flows, data model). These examples are intended to make the methodology even more accessible and stimulate your inspiration.
4.  **The Complete Article Series (viewable in [`/articles/`](./articles/))**:
    *   The [`/articles/fr/`](./articles/fr/) folder contains the entirety of the 9 parts of the in-depth article in French, allowing you to easily navigate between sections and delve into each concept at your own pace.
    *   The [`/articles/en/`](./articles/en/) folder contains the complete English version of the series.
5.  **Information on the Usage License (at the root of the repository) :**
    *   The [`LICENSE`](./LICENSE) file details precisely the conditions under which you can use, modify, and share the prompts, the example configuration file, and the content of the article.

## Our Fundamental Philosophy

The approach we advocate and propose you implement is based on a strong conviction, born of experience: Artificial Intelligence, to deploy its full potential and become a true lever for transformation in the creation of complex software projects, must never be approached as an autonomous entity to which responsibility is blindly delegated. It reaches its peak of effectiveness and relevance when it is **meticulously guided by rich, precise, and explicit context, and when it is directed by a clear and strategic human intention**.

Our methodology aims to:

*   **Eradicate AI "wandering" and imprecision** by focusing it on specific and clearly defined tasks, within a rigorous operational framework defined by expert-designed system prompts.
*   **Make AI an Active and Essential Partner in the In-Depth Planning Phase:** The "Senior Solution Architect & Adaptive Partner" agent is not a mere scribe; it is your ally to explore all facets of your project, to ask the difficult but necessary questions, to identify risks and blind spots, and to co-build documentation of exceptional exhaustiveness and clarity *even before the first line of application code is considered*.
*   **Streamline and Enhance the Implementation Phase:** The "Senior Collaborative Full-Stack Developer" agent, relying on this solid gold documentation, then assists you in translating plans into code, with a relevance, efficiency, and attention to quality that transform the act of coding.
*   **Establish and Strengthen the Human Developer in their Role as Strategic Pilot, Informed Decision-Maker, and Ultimate Validator:** AI is a phenomenally powerful co-pilot, a multiplier of your capabilities, but you remain, and must remain, the captain, bringing your irreplaceable business acumen, critical judgment, and final responsibility to each key step of the process.

## Quick Start Guide

For an exhaustive implementation and to understand all the subtleties, we strongly refer you to [**Part 3 of our complete article series**](./articles/en/part3_guide_pratique_configuration_kilo_code.md), available in the [`/articles/en/`](./articles/en/) folder. Nevertheless, here is a condensed overview to get you started:

1.  **Essential Prerequisites:**
    *   Visual Studio Code and Git must be installed and functional on your machine.
    *   A VS Code extension of the "AI agent" type must be installed (we recommend [Kilo Code](https://kilocode.ai/) for its flexibility and advanced features, but its predecessor Roo-Code or similar tools can also be adapted).
    *   You must have a valid API key for a powerful Large Language Model (LLM) (we recommend using Google Gemini 2.5 Pro or Flash models for their power/accessibility balance). This key must be securely configured in your AI extension (consult your extension's documentation, for example: [Kilo Code - Connecting to an API Provider](https://kilocode.ai/docs/getting-started/connecting-api-provider)).
2.  **Clone this GitHub Repository:**
    ```bash
    git clone https://github.com/Adonis-Rwabira/Devs_AI_Agents.git
    cd Devs_AI_Agents
    ```
3.  **Create and Configure "Custom Modes" (Custom Agents) in Your AI Extension:**
    *   Use your extension's mode management interface (Kilo Code, Roo-Code) to create a new "custom mode" (or "custom agent"). For detailed instructions, refer to your tool's documentation (ex: [Kilo Code - Custom Modes](https://kilocode.ai/docs/features/custom-modes)).
    *   **For the "Senior Solution Architect & Adaptive Partner" Agent:**
        *   Give your mode an explicit name (ex: `My Strategic AI Architect`).
        *   Copy the entire content of the file [`prompts/en/AGENT_SENIOR_SOLUTION_ARCHITECT_EN.md`](./prompts/en/AGENT_SENIOR_SOLUTION_ARCHITECT_EN.md) and paste it into the field **System Prompt** (or equivalent) of this mode's configuration.
        *   Select the AI model you want to use (ex: `gemini-2.5-pro-preview-0605` for in-depth analysis).
        *   Enable the necessary "Tools" (capabilities), such as file system access for reading/writing (always with your approval for writing actions).
        *   Save this mode.
    *   **For the "Senior Collaborative Full-Stack Developer" Agent:**
        *   Create a second custom mode (ex: `My Elite AI Co-Developer`).
        *   Copy the entire content of the file [`prompts/en/AGENT_SENIOR_COLLABORATIVE_DEVELOPER_EN.md`](./prompts/en/AGENT_SENIOR_COLLABORATIVE_DEVELOPER_EN.md) and paste it into the **System Prompt** of this mode.
        *   Select the appropriate AI model (ex: `gemini-2.5-flash-latest` for responsive coding assistance, or the Pro version for more complex tasks).
        *   Enable relevant "Tools" (ex: File System Read/Write, Terminal Access – ensuring that approval for sensitive actions is configured to require your manual validation, see for example [Kilo Code - Action Approval](https://kilocode.ai/docs/features/auto-approving-actions)).
        *   Save this mode.
4.  **Begin Your Augmented Collaboration!**
    *   In your AI extension, select the "My Strategic AI Architect" mode to begin Phase 1 of planning and designing your project.
    *   Intensively use "Context Mentions" (`@file`, `@folder`, `@url`) to provide the agent with specific and targeted information from your documents or external sources (see for example [Kilo Code - Context Mentions](https://kilocode.ai/docs/basic-usage/context-mentions)).

## Contribute, Exchange, and Grow Together

This project is a living initiative, intended to be enriched and evolve through the collective intelligence of the developer community. Your experience, your critical and constructive feedback, as well as your direct contributions are not only welcome, but they are essential to refine this methodology and the prompts that support it.

*   **Discussions, Questions, and Improvement Suggestions:** We invite you to use the **Issues** section of this GitHub repository. This is the ideal place to ask your questions, share your thoughts on the methodology, suggest avenues for improving the prompts, or point out areas that deserve clarification or further exploration.
*   **Direct Contributions (Code, Prompts, Documentation):** If you have developed concrete and tested modifications that improve the existing prompts, if you have suggestions for the example configuration file, or if you wish to contribute to the translation or enrichment of the documentation, do not hesitate to submit a **Pull Request**. Each proposal will be examined with the most significant attention and recognition.

It is together, through the open sharing of our knowledge and experiences, that we can make **Human-AI** collaboration an ever more powerful lever for innovation and excellence in software engineering.

---

Thank you for your passionate interest in **Devs_AI_Agents**! We enthusiastically encourage you to immerse yourself in the **complete article series**, available in its entirety in the [`/articles/en/`](./articles/en/) folder, and to explore in detail the concrete examples provided in the [`/examples/en/`](./examples/en/) folder to see this methodology in action.
