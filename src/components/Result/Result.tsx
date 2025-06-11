import style from './Result.module.scss'

interface ResultProps {
  first: string;
  second: string;
}

const CHUNK_SIZE = 30; // сколько символов в строке, можно адаптировать по ширине окна

function chunk<T>(arr: T[], size: number): T[][] {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

const Result: React.FC<ResultProps> = ({ first, second }) => {
  // const aminoAcidColors: Record<string, string> = {
  //   C: '#FFEA00',                                                                 // Цистеин
  //   A: '#67E4A6', I: '#67E4A6',                                                 // Гидрофобные
  //   L: '#67E4A6', M: '#67E4A6',                                                 // Гидрофобные
  //   F: '#67E4A6', W: '#67E4A6',                                                 // Гидрофобные
  //   Y: '#67E4A6', V: '#67E4A6',                                                 // Гидрофобные
  //   P: '#67E4A6',                                                                 // Гидрофобные
  //   G: '#C4C4C4',                                                                 // Глицин
  //   D: '#FC9CAC', E: '#FC9CAC',                                                 // Отрицательно заряженные
  //   K: '#BB99FF', R: '#BB99FF',                                                 // Положительно заряженные
  //   S: '#80BFFF', T: '#80BFFF', H: '#80BFFF', Q: '#80BFFF', N: '#80BFFF' // Полярные незаряженные
  // };
  enum AminoAcidColor {
    C = '#FFEA00', // Цистеин

    // Гидрофобные
    A = '#67E4A6',
    I = '#67E4A6',
    L = '#67E4A6',
    M = '#67E4A6',
    F = '#67E4A6',
    W = '#67E4A6',
    Y = '#67E4A6',
    V = '#67E4A6',
    P = '#67E4A6',

    G = '#C4C4C4', // Глицин

    // Отрицательно заряженные
    D = '#FC9CAC',
    E = '#FC9CAC',

    // Положительно заряженные
    K = '#BB99FF',
    R = '#BB99FF',

    // Полярные незаряженные
    S = '#80BFFF',
    T = '#80BFFF',
    H = '#80BFFF',
    Q = '#80BFFF',
    N = '#80BFFF'
  }
  return (
    <div className={style.result}>
      <span className={style.line}>{
        first.split('').map((aminoAcid, index) => (
          <span className={style.aminoAcid} key={index} style={{ backgroundColor: AminoAcidColor[aminoAcid as keyof typeof AminoAcidColor] }}>
            {aminoAcid}
          </span>
        ))
      }</span>
      <span className={style.line}>{
        second.split('').map((aminoAcid, index) => (
          <span className={style.aminoAcid} key={index} style={{ backgroundColor: first[index] !== second[index] ? AminoAcidColor[aminoAcid as keyof typeof AminoAcidColor] : "unset" }}>
            {aminoAcid}
          </span>
        ))
      }</span>
    </div>
  )
}
export default Result