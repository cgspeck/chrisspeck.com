import React from "react"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <h2>Hello!</h2>
      <p>
        My name is Chris, I am a software engineer and a man of many hobbies
        living in Melbourne, Australia.
      </p>
      <p>You may be interested in the following tools I've published:</p>
      <ul>
        <li>
          Photographers'{" "}
          <a
            href="https://matcalculator.chrisspeck.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mat Board Calculator
          </a>
        </li>
        <li>
          Homebrewers'{" "}
          <a
            href="https://hopscalculator.chrisspeck.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hop Aging Calculator
          </a>
        </li>
        <li>
          Multi-computer{" "}
          <a
            href="https://github.com/cgspeck/fg-orchestrator"
            target="_blank"
            rel="noopener noreferrer"
          >
            launcher for FlighGear
          </a>
        </li>
        <li>
          A 3d printable{" "}
          <a
            href="https://github.com/cgspeck/etw"
            target="_blank"
            rel="noopener noreferrer"
          >
            elevator trimtab
          </a>{" "}
          or{" "}
          <a
            href="https://www.thingiverse.com/thing:3021944"
            target="_blank"
            rel="noopener noreferrer"
          >
            parametric cat food lid
          </a>
        </li>
      </ul>
      <p>If you wish to contact me, my email address is cgspeck at gmail.com</p>
      <p>You can also find me:</p>
      <ul>
        <li>
          on{" "}
          <a
            href="https://github.com/cgspeck"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </li>
        <li>
          on{" "}
          <a
            href="https://www.linkedin.com/in/cgspeck/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          on{" "}
          <a
            href="https://www.thingiverse.com/specky/designs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Thingiverse
          </a>
        </li>
      </ul>

      <p>
        Sometimes I add pages to this site and you may find the links to these
        above.
      </p>
    </Layout>
  )
}
