import React, { useRef } from "react";
import gsap from "gsap";
import { POEMS } from "../assets/poems";

export default function PoemsPage({ onNext }) {
  const pageRef = useRef(null);

  const handleNext = () => {
    if (pageRef.current) {
      const el = pageRef.current;
      gsap.to(el, { scale: 0.98, duration: 0.12, yoyo: true, repeat: 1 });
      gsap.to(el, {
        opacity: 0,
        y: -8,
        duration: 0.6,
        delay: 0.18,
        onComplete: onNext,
      });
    } else {
      onNext();
    }
  };

  return (
    <div
      ref={pageRef}
      className="relative page-card p-8 mx-2 min-h-[600px] overflow-hidden"
    >
      {/* Falling Roses Background - يبدأ التساقط فوراً */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="falling-rose"
          style={{ animation: "fall 8s linear infinite" }}
        >
          🌹
        </div>
        <div
          className="falling-rose"
          style={{ animation: "fall 10s linear infinite" }}
        >
          🌷
        </div>
        <div
          className="falling-rose"
          style={{ animation: "fall 9s linear infinite " }}
        >
          🌺
        </div>
        <div
          className="falling-rose"
          style={{ animation: "fall 11s linear infinite" }}
        >
          🌸
        </div>
        <div
          className="falling-rose"
          style={{ animation: "fall 8.5s linear infinite" }}
        >
          🌹
        </div>
        <div
          className="falling-rose"
          style={{ animation: "fall 9.5s linear infinite" }}
        >
          🌷
        </div>
        <div
          className="falling-rose"
          style={{ animation: "fall 10.5s linear infinite" }}
        >
          🌺
        </div>
        <div
          className="falling-rose"
          style={{ animation: "fall 8.8s linear infinite" }}
        >
          🌸
        </div>
        <div
          className="falling-rose"
          style={{ animation: "fall 9.2s linear infinite" }}
        >
          🌹
        </div>
        <div
          className="falling-rose"
          style={{ animation: "fall 10.2s linear infinite" }}
        >
          🌷
        </div>
        <div
          className="falling-rose"
          style={{ animation: "fall 9.8s linear infinite" }}
        >
          🌺
        </div>
        <div
          className="falling-rose"
          style={{ animation: "fall 8.3s linear infinite" }}
        >
          🌸
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-full space-y-6 mb-8">
          <p
            style={{
              whiteSpace: "pre-line",
              lineHeight: "1.8",
              textAlign: "center",
            }}
          >
            {`
            هناك لحظات معينة في الحياة تترك أثرًا بسيطًا… لكنه لا يشبه أي شيء آخر. 
            ولأسباب لا أعرف كيف أشرحها بدقة، كانت رؤيتي لكِ إحدى هذه اللحظات.
             رغم قِصر المرات التي رأيتك فيها، إلا أنكِ لم تغادري عقلي يومًا.
              وفي وسط الناس، وفي عزّ انشغالي وضجيج الحياة من حولي، أجد نفسي أفكر فيكِ. 
              وكأن شيئًا هادئًا وجميلًا يلفتني إليكِ كل مرة.
               لا أخفي عليكِ أنني ارتحتُ لشخصيتك وهدوئك، وشعرت أنكِ إنسانة مختلفة…
                شخص يستحق أن يُقترب منه باحترام، وأن تُمنح العلاقة معه فرصة لتكبر خطوة بخطوة. 
                ولهذا كتبت لكِ اليوم، لأقول لكِ كما قال الشاعر: 
                وَقَفَ الْقَلْبُ بِيَ بَيْنَ يَدَيْكِ 
                وَاعْتَرَفَ بِكُلِّ ما فِي ضَمِيرِي 
                أَنْتِ النَّدَى وَالْهُدَى وَالْحَنَانُ 
                وَشُعَاعُ نَجْمَةٍ فِيْ قَلْبِظْلْمِي 
                لستُ هنا لأعِدَكِ بالجنان، بل لأعدكِ بأنني سأبذل كل ما في وسعي، بصدق وإخلاص، لأن تكون هذه الدنيا التي نسيرها معاً جنّةً لكِ.
                 سأعمل لأكون سندكِ، وأذنكِ التي تسمع، وقلبكِ الذي يفهم. 
                 هدفي هو رؤية البسمة لا تفارق محيّاكِ، والسعادة رفيقة دربكِ.
            
            `}
          </p>
        </div>

        <button
          onClick={handleNext}
          className="mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-rose-500 to-rose-400 text-white shadow-md text-lg hover:from-rose-600 hover:to-rose-500 transition-all"
        >
          التالي →
        </button>
      </div>
    </div>
  );
}
