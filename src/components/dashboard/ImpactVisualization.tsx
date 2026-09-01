"use client";

import { Column, Text } from "@once-ui-system/core";
import classNames from "classnames";
import { useMemo, useState } from "react";
import styles from "@/app/dashboard/dashboard.module.scss";

type ImpactItem = {
  value: string;
  amount: number;
  label: string;
  note: string;
};

type ImpactVisualizationProps = {
  impact: ImpactItem[];
};

export function ImpactVisualization({ impact }: ImpactVisualizationProps) {
  const [activeLabel, setActiveLabel] = useState(impact[0]?.label ?? "");
  const activeImpact = impact.find((item) => item.label === activeLabel) ?? impact[0];

  const scales = useMemo(() => {
    const maxAmount = Math.max(...impact.map((item) => item.amount), 1);
    return impact.map((item) => ({
      label: item.label,
      width: `${Math.max(20, (Math.log10(item.amount + 1) / Math.log10(maxAmount + 1)) * 100)}%`,
    }));
  }, [impact]);

  return (
    <div className={styles.impactVisualization}>
      <div className={styles.impactList}>
        {impact.map((item) => {
          const scale = scales.find((entry) => entry.label === item.label);
          const isActive = item.label === activeImpact.label;
          return (
            <button
              key={item.label}
              className={classNames(styles.impactButton, isActive && styles.impactButtonActive)}
              onClick={() => setActiveLabel(item.label)}
              type="button"
            >
              <div className={styles.impactButtonHead}>
                <Text variant="label-default-s">{item.label}</Text>
                <Text variant="heading-strong-xs">{item.value}</Text>
              </div>
              <div className={styles.impactTrack}>
                <span className={styles.impactBar} style={{ width: scale?.width }} />
              </div>
            </button>
          );
        })}
      </div>

      {activeImpact && (
        <Column className={styles.impactDetail} gap="4">
          <Text variant="label-default-xs" onBackground="brand-strong">Selected metric</Text>
          <Text variant="display-strong-s">{activeImpact.value}</Text>
          <Text variant="heading-default-xs">{activeImpact.label}</Text>
          <Text variant="body-default-xs" onBackground="neutral-weak">{activeImpact.note}</Text>
        </Column>
      )}
    </div>
  );
}
