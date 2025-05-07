import React, { useState, useRef, useEffect } from "react";
import styles from "./GachaStrip.module.css";
import { getVoucher } from "../backend/voucherData";
import Preloader from "./Preloader";

function GachaStrip() {
  const [basePrizes, setBasePrizes] = useState([]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(true);
  const stripRef = useRef(null);
  const stripContainerRef = useRef(null);
  const [spinCount, setSpinCount] = useState(1);
  useEffect(()=>{
    const fetchVoucher = async() =>{
      const tempData = await getVoucher("Voucher");
      setBasePrizes(prev=>prev = tempData);
      setLoading(false);
    };
    fetchVoucher();
  }, []);
  // Tạo một mảng dài gấp nhiều lần để tạo hiệu ứng vô hạn
  const extendedPrizes = [...Array(50)].flatMap(() => basePrizes);

  const handleSpin = () => {
    if (isSpinning || spinCount <= 0) return;

    setIsSpinning(true);
    setResult("");
    setSpinCount((prev) => prev - 1);

    const itemWidth = stripRef.current.children[0].offsetWidth;
    const visibleItems = 7;
    const middleItemIndex = Math.floor(visibleItems / 2);

    // Tính toán số vòng quay ngẫu nhiên
    const minSpins = 2;
    const randomSpins = Math.floor(Math.random() * 3) + minSpins;
    const randomExtra = Math.floor(Math.random() * basePrizes.length);

    // Tính toán index cần dừng lại
    const targetIndex =
      basePrizes.length * randomSpins + middleItemIndex + randomExtra;
    const translateX = targetIndex * itemWidth;

    // Quay strip
    stripRef.current.style.transition =
      "transform 4s cubic-bezier(0.95, 0.05, 0.5, 1)";
    stripRef.current.style.transform = `translateX(-${translateX}px)`;

    // Sau khi quay xong, lấy kết quả
    setTimeout(() => {
      setIsSpinning(false);
      setResult(basePrizes[randomExtra - 1].voucher_id);

      // ✅ Reset về vị trí tương đương ở giữa strip để tránh lỗi "quay ngược"
      const itemWidth = stripRef.current.children[0].offsetWidth;
      const visibleItems = 7;
      const middleItemIndex = Math.floor(visibleItems / 2);
      const safeIndex = basePrizes.length * 2 + middleItemIndex + randomExtra;
      const newTranslateX = safeIndex * itemWidth;

      // ⚠️ Loại bỏ transition trước khi reset
      stripRef.current.style.transition = "none";
      stripRef.current.style.transform = `translateX(-${newTranslateX}px)`;
    }, 4000);
  };

  return (
    <div className={styles.gachaContainer}>
      {loading?<Preloader></Preloader>:<>
      <h1>Số lượt quay còn lại: {spinCount}</h1>
      <div className={styles.stripFrame} ref={stripContainerRef}>
        <div className={styles.strip} ref={stripRef}>
          {extendedPrizes.map((prize, index) => (
            <div className={styles.stripItem} key={index}>
              {prize.voucher_id}
            </div>
          ))}
        </div>
        <div className={styles.indicator}>▼</div>
      </div>
      <button
        className={styles.spinBtn}
        onClick={handleSpin}
        disabled={isSpinning || spinCount <= 0}
      >
        {isSpinning ? "Đang quay..." : spinCount <= 0 ? "Hết lượt" : "Quay"}
      </button>
      {result && !isSpinning && (
        <div className={styles.result}>
          🎉 Bạn nhận được: <strong>{result}</strong>!
        </div>
      )}</>}
    </div>
  );
}

export default GachaStrip;
