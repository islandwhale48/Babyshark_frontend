import React from 'react'

const Workspace = () => {
  return (
    <div>
      <h1>🚀 {startupName}</h1>
<p>Your startup workspace</p>

<div className="grid">
  <FeatureCard title="Roadmap" />
  <FeatureCard title="Pitch" />
  <FeatureCard title="Licences" />
  <FeatureCard title="Daily Planner" />
  <FeatureCard title="Failure Simulator" />
  <FeatureCard title="Market Insights" />
</div>

    </div>
  )
}

export default Workspace
