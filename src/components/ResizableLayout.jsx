import { Panel, PanelGroup } from "react-resizable-panels";

import ResizeHandle from "./ResizeHandle";
import styles from "../styles.module.css";
import { SandpackProvider } from "@codesandbox/sandpack-react";

import React from "react";

export default function ResizableLayout() {
  return (
    <div className={styles.Container}>
      <SandpackProvider className={styles.BottomRow}>
        <PanelGroup direction="horizontal">
          <Panel className={styles.Panel} defaultSize={20} order={1}>
            <div className={styles.PanelContent}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
              voluptatem ducimus rerum magnam sapiente! Illum cumque praesentium
              itaque sunt vero? Blanditiis doloribus non quisquam molestiae
              praesentium facilis neque eveniet porro.
            </div>
          </Panel>
          <ResizeHandle />

          <Panel className={styles.Panel} order={2}>
            <div className={styles.PanelContent}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
              impedit dolore sequi, nulla animi quas nobis ex corrupti maiores
              unde molestiae similique voluptate commodi explicabo ea? Excepturi
              rem velit explicabo.
            </div>
          </Panel>

          <ResizeHandle />
          <Panel className={styles.Panel} defaultSize={40} order={3}>
            <PanelGroup className={styles.Panel} direction="vertical">
              <Panel className={styles.Panel}>
                <div
                  className={styles.PanelContent}
                  style={{ pointerEvents: "none" }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                  beatae, similique quasi rerum consequuntur perspiciatis
                  repellat dicta, est placeat amet dolores ipsa maiores, natus
                  consequatur culpa. Vel repellat reiciendis nostrum?
                </div>
              </Panel>
              <ResizeHandle />
              <Panel className={styles.Panel} defaultSize={20}>
                <div className={styles.PanelContent}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                  eveniet tenetur eligendi. Quis assumenda dolorum molestiae
                  temporibus quo numquam deleniti iste quaerat eaque omnis
                  pariatur, commodi ex accusantium. Blanditiis, voluptas.
                </div>
              </Panel>
            </PanelGroup>
          </Panel>
        </PanelGroup>
      </SandpackProvider>
    </div>
  );
}
