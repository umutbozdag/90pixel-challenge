import React from "react";
import styles from "./movie-card-skeleton.module.scss";

export default function MovieCardSkeleton() {
  return (
    <div className={styles.cardSkeleton}>
      <div className={styles.imageSkeleton}></div>
      <div className={styles.cardTitleSkeleton}></div>
      <div className={styles.cardYearSkeleton}></div>
      <div className={styles.cardRatingSkeleton}>
        <div className={styles.cardRatingContentSkeleton}></div>
      </div>
      <div className={styles.cardButtonSkeleton}></div>
    </div>
  );
}
