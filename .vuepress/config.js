module.exports = {
  themeConfig: {
    displayAllHeaders: true,
    sidebar: [
      {
        title: "Overview",
        collapsable: true,
        children: ["/"]
      },

      {
        title: "Assessment Brief",
        collapsable: true,
        children: ["/assessment/assessment_1.md"]
      },

      {
        title: "Week 1 - Workflow & Version Control",
        children: [
          "/week_1/",
          "/week_1/notes.md",
          "/week_1/notes_practical.md",
          "/week_1/practical.md"
        ]
      }
    ]
  }
};
