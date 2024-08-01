export function findYear(year: number){
    return years.find(value => value.year == year)
}

export interface Year {
    year: number,
    issue: { name: string, description: string }[];
    isVote: boolean
}

export interface YearTest {
    year: number,
    isVote: boolean
}

export const years: Year[] = [
    {
        year: 1919,
        isVote: false,
        issue: [
          {
            name: "3.1 운동",
            description: "일제 강점기 최대 규모의 독립운동. 대한민국 임시정부 수립의 계기가 됨."
          },
          {
            name: '조형균 외 10인 체포',
            description: "조형균 외 10인이 조선총독부에 독립청원서를 제출함과 동시에 체포됨."
          }
        ]
      },
      {
        year: 1920,
        isVote: false,
        issue: [
          {
            name: "청산리 대첩",
            description: "김좌진, 홍범도 등이 이끈 독립군 연합부대가 일본군에 대승을 거둠."
          }
        ]
      },
      {
        year: 1921,
        isVote: false,
        issue: [
          {
            name: "임시정부 처형사건",
            description: "함남 풍산군 안수면에 거주하는 김병선ㆍ염상한은 임시정부에 반항하는 자로서 정부원에게 총살됨."
          }
        ]
      },
      {
        year: 1922,
        isVote: false,
        issue: [
          {
            name: "제1차 조선교육령 개정",
            description: "일제의 조선인 교육 정책 변화. 보통교육 연한 연장 등."
          }
        ]
      },
      {
        year: 1923,
        isVote: false,
        issue: [
          {
            name: "관동대지진과 조선인 학살",
            description: "일본 관동 지역 대지진 발생 후 조선인 대량 학살 사건."
          }
        ]
      },
      {
        year: 1924,
        isVote: false,
        issue: [
          {
            name: "특별한 이슈 없음",
            description: "이 해에 특별히 기록할 만한 중요 사건이 없었습니다."
          }
        ]
      },
      {
        year: 1925,
        isVote: false,
        issue: [
          {
            name: "조선공산당 창당",
            description: "한국 최초의 공산주의 정당 결성. 일제의 탄압으로 1928년 해체."
          }
        ]
      },
      {
        year: 1926,
        isVote: false,
        issue: [
          {
            name: "6.10 만세운동",
            description: "순종 황제 인산일을 계기로 한 독립만세 운동."
          }
        ]
      },
      {
        year: 1927,
        isVote: false,
        issue: [
          {
            name: "신간회 결성",
            description: "민족주의 계열과 사회주의 계열의 연합 항일 단체 결성."
          }
        ]
      },
      {
        year: 1928,
        isVote: false,
        issue: [
          {
            name: "특별한 이슈 없음",
            description: "이 해에 특별히 기록할 만한 중요 사건이 없었습니다."
          }
        ]
      },
      {
        year: 1929,
        isVote: false,
        issue: [
          {
            name: "광주학생운동",
            description: "일제 강점기 최대 규모의 학생 항일운동. 전국으로 확산됨."
          }
        ]
      },
      {
        year: 1930,
        isVote: false,
        issue: [
          {
            name: "특별한 이슈 없음",
            description: "이 해에 특별히 기록할 만한 중요 사건이 없었습니다."
          }
        ]
      },
      {
        year: 1931,
        isVote: false,
        issue: [
          {
            name: "만주사변 발발",
            description: "일본의 만주 침략. 한국 독립운동의 주요 무대 상실."
          }
        ]
      },
      {
        year: 1932,
        isVote: false,
        issue: [
          {
            name: "윤봉길 의사 의거",
            description: "상하이 훙커우 공원에서 일본 고위 관리들을 향해 폭탄을 투척."
          }
        ]
      },
      {
        year: 1933,
        isVote: false,
        issue: [
          {
            name: "특별한 이슈 없음",
            description: "이 해에 특별히 기록할 만한 중요 사건이 없었습니다."
          }
        ]
      },
      {
        year: 1934,
        isVote: false,
        issue: [
          {
            name: "특별한 이슈 없음",
            description: "이 해에 특별히 기록할 만한 중요 사건이 없었습니다."
          }
        ]
      },
      {
        year: 1935,
        isVote: false,
        issue: [
          {
            name: "특별한 이슈 없음",
            description: "이 해에 특별히 기록할 만한 중요 사건이 없었습니다."
          }
        ]
      },
      {
        year: 1936,
        isVote: false,
        issue: [
          {
            name: "특별한 이슈 없음",
            description: "이 해에 특별히 기록할 만한 중요 사건이 없었습니다."
          }
        ]
      },
      {
        year: 1937,
        isVote: false,
        issue: [
          {
            name: "중일전쟁 발발",
            description: "일본의 중국 침략 본격화. 한국인 강제 동원 심화."
          }
        ]
      },
      {
        year: 1938,
        isVote: false,
        issue: [
          {
            name: "특별한 이슈 없음",
            description: "이 해에 특별히 기록할 만한 중요 사건이 없었습니다."
          }
        ]
      },
      {
        year: 1939,
        isVote: false,
        issue: [
          {
            name: "특별한 이슈 없음",
            description: "이 해에 특별히 기록할 만한 중요 사건이 없었습니다."
          }
        ]
      },
      {
        year: 1940,
        isVote: false,
        issue: [
          {
            name: "창씨개명 실시",
            description: "일제의 민족말살정책의 일환으로 한국인의 성과 이름을 일본식으로 개명 강요."
          }
        ]
      },
      {
        year: 1941,
        isVote: false,
        issue: [
          {
            name: "특별한 이슈 없음",
            description: "이 해에 특별히 기록할 만한 중요 사건이 없었습니다."
          }
        ]
      },
      {
        year: 1942,
        isVote: false,
        issue: [
          {
            name: "특별한 이슈 없음",
            description: "이 해에 특별히 기록할 만한 중요 사건이 없었습니다."
          }
        ]
      },
      {
        year: 1943,
        isVote: false,
        issue: [
          {
            name: "특별한 이슈 없음",
            description: "이 해에 특별히 기록할 만한 중요 사건이 없었습니다."
          }
        ]
      },
      {
        year: 1944,
        isVote: false,
        issue: [
          {
            name: "특별한 이슈 없음",
            description: "이 해에 특별히 기록할 만한 중요 사건이 없었습니다."
          }
        ]
      },
      {
        year: 1945,
        isVote: false,
        issue: [
          {
            name: "광복",
            description: "일본의 항복으로 35년간의 일제 강점기 종료. 미군정 시작."
          }
        ]
      },
      {
        year: 1946,
        isVote: false,
        issue: [
          {
            name: "특별한 이슈 없음",
            description: "이 해에 특별히 기록할 만한 중요 사건이 없었습니다."
          }
        ]
      },
      {
        year: 1947,
        isVote: false,
        issue: [
          {
            name: "특별한 이슈 없음",
            description: "이 해에 특별히 기록할 만한 중요 사건이 없었습니다."
          }
        ]
      },
      {
        year: 1948,
        isVote: true,
        issue: [
          {
            name: "대한민국 정부 수립",
            description: "8월 15일 대한민국 정부 수립. 이승만 초대 대통령 취임."
          },
          {
            name: "제주 4.3 사건",
            description: "제주도에서 발생한 무력 충돌과 민간인 희생 사건."
          }
        ]
      },
      {
        year: 1949,
        isVote: false,
        issue: [
          {
            name: "농지개혁법 제정",
            description: "지주제 폐지와 농민의 토지 소유 실현을 위한 법률 제정."
          }
        ]
      },
      {
        year: 1950,
        isVote: false,
        issue: [
          {
            name: "6.25 전쟁 발발",
            description: "북한의 남침으로 한국전쟁 시작. 1953년 휴전 협정 체결까지 지속."
          }
        ]
      },
      {
        year: 1951,
        isVote: false,
        issue: [
          {
            name: "특별한 이슈 없음",
            description: "이 해에 특별히 기록할 만한 중요 사건이 없었습니다."
          }
        ]
      },
      {
        year: 1952,
        isVote: false,
        issue: [
          {
            name: "특별한 이슈 없음",
            description: "이 해에 특별히 기록할 만한 중요 사건이 없었습니다."
          }
        ]
      },
      {
        year: 1953,
        isVote: false,
        issue: [
          {
            name: "한국전쟁 정전협정 체결",
            description: "7월 27일 판문점에서 정전협정 체결. 전쟁 상태 일시 중지."
          },
          {
            name: "한미상호방위조약 체결",
            description: "한국과 미국 간 군사동맹 관계 수립."
          }
        ]
      },
      {
        year: 1954,
        isVote: false,
        issue: [
          {
            name: "특별한 이슈 없음",
            description: "이 해에 특별히 기록할 만한 중요 사건이 없었습니다."
          }
        ]
      },
      {
        year: 1955,
        isVote: false,
        issue: [
          {
            name: "특별한 이슈 없음",
            description: "이 해에 특별히 기록할 만한 중요 사건이 없었습니다."
          }
        ]
      },
      {
        year: 1956,
        isVote: false,
        issue: [
          {
            name: "특별한 이슈 없음",
            description: "이 해에 특별히 기록할 만한 중요 사건이 없었습니다."
          }
        ]
      },
      {
        year: 1957,
        isVote: false,
        issue: [
          {
            name: "특별한 이슈 없음",
            description: "이 해에 특별히 기록할 만한 중요 사건이 없었습니다."
          }
        ]
      },
      {
        year: 1958,
        isVote: false,
        issue: [
          {
            name: "특별한 이슈 없음",
            description: "이 해에 특별히 기록할 만한 중요 사건이 없었습니다."
          }
        ]
      },
      {
        year: 1959,
        isVote: false,
        issue: [
          {
            name: "경향신문 폐간",
            description: "이승만 정권의 언론 탄압으로 경향신문 강제 폐간."
          }
        ]
      },
    {
      year: 1960,
      isVote: false,
      issue: [
        {
          name: "4.19 혁명",
          description: "이승만 독재 정권에 반대하는 학생과 시민들의 대규모 시위. 이승만 대통령의 하야와 제1공화국의 몰락으로 이어짐."
        },
        {
          name: "제2공화국 수립",
          description: "4.19 혁명 이후 장면 내각이 출범하며 의원내각제 형태의 제2공화국이 수립됨."
        }
      ]
    },
    {
      year: 1961,
      isVote: false,
      issue: [
        {
          name: "5.16 군사정변",
          description: "박정희를 중심으로 한 군부 세력이 쿠데타를 일으켜 정권을 장악. 제2공화국의 종말과 군사 정부 수립."
        }
      ]
    },
    {
      year: 1962,
      isVote: false,
      issue: [
        {
          name: "제1차 경제개발 5개년 계획 시작",
          description: "박정희 정부의 경제 개발 정책 시작. 수출 주도형 경제 성장 전략 채택."
        },
        {
          name: "통화개혁 실시",
          description: "화폐 가치를 10분의 1로 절하하는 통화개혁 실시. 경제 안정화 목적."
        }
      ]
    },
    {
      year: 1963,
      isVote: false,
      issue: [
        {
          name: "박정희 대통령 당선",
          description: "제5대 대통령 선거에서 박정희 후보 당선. 제3공화국 출범."
        },
        {
          name: "한일회담 반대 시위",
          description: "한일 국교 정상화를 위한 회담에 반대하는 대규모 시위 발생."
        }
      ]
    },
    {
      year: 1964,
      isVote: false,
      issue: [
        {
          name: "6.3 한일회담 반대 시위",
          description: "한일 국교 정상화 반대 시위 격화. 서울에 비상계엄령 선포."
        },
        {
          name: "베트남 파병 시작",
          description: "한국군의 베트남전 파병 시작. 비전투부대 파견."
        }
      ]
    },
    {
      year: 1965,
      isVote: false,
      issue: [
        {
          name: "한일 기본조약 체결",
          description: "한국과 일본 간의 국교 정상화를 위한 조약 체결. 식민지배에 대한 배상금 성격의 경제협력 자금 도입."
        },
        {
          name: "한국군 베트남 전투부대 파병",
          description: "베트남전에 전투부대 파병 시작. 국제 정세에 적극 개입."
        }
      ]
    },
    {
      year: 1966,
      isVote: false,
      issue: [
        {
          name: "브라운 각서 체결",
          description: "한미 간 주한미군 지위협정(SOFA) 체결을 위한 기본 합의."
        },
        {
          name: "제2차 경제개발 5개년 계획 시작",
          description: "중화학공업 육성과 사회간접자본 확충에 중점을 둔 경제 계획 시작."
        }
      ]
    },
    {
      year: 1967,
      isVote: false,
      issue: [
        {
          name: "제6대 대통령 선거",
          description: "박정희 대통령 재선. 여당의 3선 개헌 움직임 시작."
        },
        {
          name: "동백림 사건",
          description: "서독에서 활동하던 한국인들의 북한 접촉 사건. 대규모 간첩단 사건으로 확대."
        }
      ]
    },
    {
      year: 1968,
      isVote: false,
      issue: [
        {
          name: "1.21 사태",
          description: "북한 특수부대의 청와대 습격 시도 사건."
        },
        {
          name: "푸에블로호 사건",
          description: "북한이 미 해군 정보함 푸에블로호를 나포한 사건. 한반도 긴장 고조."
        }
      ]
    },
    {
      year: 1969,
      isVote: false,
      issue: [
        {
          name: "3선 개헌",
          description: "대통령의 3선 연임을 허용하는 헌법 개정안 통과."
        },
        {
          name: "전태일 분신사건",
          description: "노동자의 열악한 근로조건 개선을 요구하며 전태일 분신. 노동운동의 기폭제."
        }
      ]
    },
    {
      year: 1970,
      isVote: false,
      issue: [
        {
          name: "새마을운동 시작",
          description: "농촌 근대화와 소득증대를 위한 국가주도 개발운동 시작."
        },
        {
          name: "경부고속도로 완공",
          description: "서울-부산 간 고속도로 완공. 국토 개발의 상징적 사업."
        }
      ]
    },
    {
      year: 1971,
      isVote: false,
      issue: [
        {
          name: "제7대 대통령 선거",
          description: "박정희 대통령 3선 성공. 김대중 후보와의 치열한 경쟁."
        },
        {
          name: "8.15 평화통일구상 선언",
          description: "박정희 대통령의 남북한 평화통일을 위한 제안 발표."
        }
      ]
    },
    {
      year: 1972,
      isVote: false,
      issue: [
        {
          name: "7.4 남북공동성명",
          description: "남북한 간 최초의 공식 합의문. 평화통일 원칙 천명."
        },
        {
          name: "10월 유신",
          description: "박정희 대통령의 비상계엄 선포와 유신헌법 공포. 독재체제 강화."
        }
      ]
    },
    {
      year: 1973,
      isVote: false,
      issue: [
        {
          name: "제1차 석유파동",
          description: "중동전쟁으로 인한 국제 유가 급등. 한국 경제에 큰 타격."
        },
        {
          name: "김대중 납치사건",
          description: "야당 정치인 김대중이 일본 도쿄에서 납치되어 서울로 강제 송환된 사건."
        }
      ]
    },
    {
      year: 1974,
      isVote: false,
      issue: [
        {
          name: "민청학련 사건",
          description: "유신체제에 반대하는 학생운동 탄압 사건."
        },
        {
          name: "8.15 저격사건",
          description: "박정희 대통령 저격 시도 사건. 영부인 육영수 여사 사망."
        }
      ]
    },
    {
      year: 1975,
      isVote: false,
      issue: [
        {
          name: "베트남 전쟁 종전",
          description: "베트남 전쟁 종결. 한국군 완전 철수."
        },
        {
          name: "긴급조치 9호 선포",
          description: "유신체제 반대 운동 억압을 위한 강력한 긴급조치 발동."
        }
      ]
    },
    {
      year: 1976,
      isVote: false,
      issue: [
        {
          name: "3.1 민주구국선언",
          description: "재야 인사들의 유신체제 반대 선언."
        },
        {
          name: "판문점 도끼만행 사건",
          description: "판문점에서 북한군의 미군 장교 살해 사건. 한반도 긴장 고조."
        }
      ]
    },
    {
      year: 1977,
      isVote: false,
      issue: [
        {
          name: "제4차 경제개발 5개년 계획 시작",
          description: "중화학공업 육성에 중점을 둔 경제 계획 시작."
        },
        {
          name: "사북 탄광 노동자 파업",
          description: "열악한 노동 조건 개선을 요구하는 대규모 광부 파업."
        }
      ]
    },
    {
      year: 1978,
      isVote: false,
      issue: [
        {
          name: "제10대 국회의원 선거",
          description: "유신체제 하의 국회의원 선거. 야당의 약진."
        },
        {
          name: "통일주체국민회의에 의한 대통령 선출",
          description: "박정희 대통령, 통일주체국민회의에서 제9대 대통령으로 선출."
        }
      ]
    },
    {
      year: 1979,
      isVote: false,
      issue: [
        {
          name: "YH무역 사건",
          description: "YH무역 여성 노동자들의 신민당사 농성 사건. 정부의 강경 진압."
        },
        {
          name: "10.26 사태",
          description: "김재규 중앙정보부장의 박정희 대통령 암살 사건. 유신체제 종말."
        },
        {
          name: "12.12 군사반란",
          description: "전두환, 노태우 등 신군부 세력의 군사 쿠데타."
        }
      ]
    },
    {
      year: 1980,
      isVote: false,
      issue: [
        {
          name: "서울의 봄",
          description: "박정희 정권 종말 후 민주화에 대한 기대와 짧은 자유 기간."
        },
        {
          name: "5.18 광주 민주화 운동",
          description: "전두환 신군부 세력에 반대하는 광주 시민들의 민주화 운동. 군부의 무력 진압."
        },
        {
          name: "국가보위비상대책위원회 설치",
          description: "전두환 중심의 신군부 세력이 사실상 정권 장악."
        }
      ]
    },
    {
      year: 1981,
      isVote: false,
      issue: [
        {
          name: "전두환 제11대 대통령 취임",
          description: "제5공화국 출범. 전두환의 권위주의 체제 시작."
        },
        {
          name: "88 서울올림픽 유치 확정",
          description: "1988년 하계올림픽 서울 개최 확정. 국제사회 진출의 계기."
        }
      ]
    },
    {
      year: 1982,
      isVote: false,
      issue: [
        {
          name: "야간통행금지 해제",
          description: "1945년 이후 지속되던 야간통행금지 완전 해제."
        },
        {
          name: "교복 자율화",
          description: "중고등학교 교복 자율화 정책 시행."
        }
      ]
    },
    {
      year: 1983,
      isVote: false,
      issue: [
        {
          name: "아웅산 테러 사건",
          description: "미얀마 아웅산 묘소에서 북한의 대남 테러. 한국 고위 관리 다수 사망."
        },
        {
          name: "KAL 007기 격추 사건",
          description: "소련 전투기에 의한 대한항공 여객기 격추 사건."
        }
      ]
    },
    {
      year: 1984,
      isVote: false,
      issue: [
        {
          name: "남북경제회담 개최",
          description: "최초의 남북 간 경제 분야 회담 개최."
        },
        {
          name: "86 아시안게임, 88 올림픽 북한 참가 제의",
          description: "정부, 북한에 86 아시안게임과 88 올림픽 참가 제의."
        }
      ]
    },
    {
      year: 1985,
      isVote: false,
      issue: [
        {
          name: "제12대 국회의원 선거",
          description: "여당의 압승, 그러나 신한민주당 등 야당의 약진."
        },
        {
          name: "남북이산가족 고향방문단 교환",
          description: "최초의 남북 이산가족 상봉 성사."
        }
      ]
    },
    {
        year: 1986,
        isVote: false,
        issue: [
          {
            name: "86 아시안게임 개최",
            description: "서울에서 제10회 아시안게임 개최. 국제 스포츠 대회 주최국으로서의 위상 제고."
          },
          {
            name: "5공 헌법 개정 논의 본격화",
            description: "여야 간 개헌 협상 시작. 대통령 직선제 도입 등 민주화 요구 고조."
          }
        ]
      },
      {
        year: 1987,
        isVote: true,
        issue: [
          {
            name: "박종철 고문치사 사건",
            description: "서울대생 박종철의 경찰 고문으로 인한 사망 사건. 민주화 운동의 기폭제 역할."
          },
          {
            name: "6월 민주 항쟁",
            description: "전국적인 민주화 시위로 직선제 개헌을 이끌어낸 대규모 민주화 운동."
          },
          {
            name: "6.29 선언",
            description: "노태우 민정당 대표의 대통령 직선제 수용 및 민주화 조치 선언."
          },
          {
            name: "대한항공 858편 폭파 사건",
            description: "북한 공작원에 의한 대한항공 여객기 폭파 테러 사건."
          }
        ]
      },
      {
        year: 1988,
        isVote: false,
        issue: [
          {
            name: "서울 올림픽 개최",
            description: "제24회 하계 올림픽 서울 개최. 한국의 국제적 위상 제고."
          },
          {
            name: "노태우 제13대 대통령 취임",
            description: "제6공화국 출범. 직선제로 선출된 첫 대통령."
          }
        ]
      },
      {
        year: 1989,
        isVote: false,
        issue: [
          {
            name: "전국교직원노동조합(전교조) 결성",
            description: "교원의 노동조합 결성권을 둘러싼 사회적 갈등 시작."
          },
          {
            name: "남북고위급회담 개최",
            description: "남북한 간 첫 총리급 회담 개최. 남북관계 개선 모색."
          }
        ]
      },
      {
        year: 1990,
        isVote: false,
        issue: [
          {
            name: "3당 합당",
            description: "민주정의당, 통일민주당, 신민주공화당의 합당으로 민주자유당 출범."
          },
          {
            name: "남북 유엔 동시 가입",
            description: "남북한 유엔 동시 가입 합의. 국제무대에서의 한반도 위상 변화."
          }
        ]
      },
      {
        year: 1991,
        isVote: false,
        issue: [
          {
            name: "남북 기본합의서 채택",
            description: "남북 간 화해와 불가침, 교류협력에 관한 기본합의서 채택."
          },
          {
            name: "지방자치제 부활",
            description: "30년 만에 지방의회 선거 실시. 지방자치 시대 개막."
          }
        ]
      },
      {
        year: 1992,
        isVote: true,
        issue: [
          {
            name: "한중 수교",
            description: "대한민국과 중화인민공화국 간 외교 관계 수립."
          },
          {
            name: "김영삼 제14대 대통령 당선",
            description: "30년 만의 문민정부 출범 예고."
          }
        ]
      },
      {
        year: 1993,
        isVote: false,
        issue: [
          {
            name: "김영삼 정부 출범",
            description: "문민정부 출범. '역사 바로 세우기' 등 개혁 정책 추진."
          },
          {
            name: "금융실명제 전격 실시",
            description: "금융거래의 투명성 제고를 위한 금융실명제 도입."
          }
        ]
      },
      {
        year: 1994,
        isVote: false,
        issue: [
          {
            name: "김일성 사망",
            description: "북한 주석 김일성 사망. 남북관계 및 북한 체제 변화 주목."
          },
          {
            name: "성수대교 붕괴 사건",
            description: "서울 성수대교 붕괴로 인한 대형 참사. 안전 불감증에 대한 경각심 고조."
          }
        ]
      },
      {
        year: 1995,
        isVote: false,
        issue: [
          {
            name: "삼풍백화점 붕괴 사고",
            description: "서울 삼풍백화점 붕괴로 인한 대규모 인명 피해. 건설 안전에 대한 문제 제기."
          },
          {
            name: "지방자치단체장 선거 실시",
            description: "최초의 전국 동시 지방선거 실시. 본격적인 지방자치 시대 개막."
          }
        ]
      },
      {
        year: 1996,
        isVote: false,
        issue: [
          {
            name: "OECD 가입",
            description: "한국, 경제협력개발기구(OECD) 29번째 회원국으로 가입."
          },
          {
            name: "한강 대홍수",
            description: "기록적인 폭우로 인한 한강 대홍수. 대규모 침수 피해 발생."
          }
        ]
      },
      {
        year: 1997,
        isVote: true,
        issue: [
          {
            name: "IMF 외환위기",
            description: "외환 부족으로 인한 국가 부도 위기. IMF 구제금융 신청."
          },
          {
            name: "김대중 제15대 대통령 당선",
            description: "최초의 여야 정권교체 실현."
          }
        ]
      },
      {
        year: 1998,
        isVote: false,
        issue: [
          {
            name: "김대중 정부 출범",
            description: "국민의 정부 출범. IMF 극복과 남북관계 개선에 주력."
          },
          {
            name: "금 모으기 운동",
            description: "IMF 외환위기 극복을 위한 전국민적 금 모으기 운동 전개."
          }
        ]
      },
      {
        year: 1999,
        isVote: false,
        issue: [
          {
            name: "금강산 관광 시작",
            description: "최초의 민간인 대상 금강산 관광 시작. 남북 교류의 새로운 장 열림."
          },
          {
            name: "제1차 연평해전",
            description: "서해 북방한계선(NLL) 인근에서 남북 해군 간 교전 발생."
          }
        ]
      },
      {
        year: 2000,
        isVote: false,
        issue: [
          {
            name: "제1차 남북정상회담",
            description: "김대중 대통령과 김정일 국방위원장 간 최초의 남북정상회담 개최."
          },
          {
            name: "노벨평화상 수상",
            description: "김대중 대통령, 한국인 최초로 노벨평화상 수상."
          }
        ]
      },
      {
        year: 2001,
        isVote: false,
        issue: [
          {
            name: "9.11 테러",
            description: "미국 9.11 테러 발생. 국제 정세 급변과 대테러 전쟁 시작."
          },
          {
            name: "월드컵 축구대회 준비",
            description: "2002년 한일 월드컵 개최를 위한 본격적인 준비 착수."
          }
        ]
      },
      {
        year: 2002,
        isVote: true,
        issue: [
          {
            name: "한일 월드컵 공동 개최",
            description: "한국과 일본의 2002 FIFA 월드컵 공동 개최. 한국 4강 진출."
          },
          {
            name: "제2차 연평해전",
            description: "서해상에서 남북 해군 간 두 번째 교전 발생."
          },
          {
            name: "노무현 제16대 대통령 당선",
            description: "새천년민주당 노무현 후보 대통령 당선."
          }
        ]
      },
      {
        year: 2003,
        isVote: false,
        issue: [
          {
            name: "노무현 정부 출범",
            description: "참여정부 출범. 균형발전과 권력기관 개혁 추진."
          },
          {
            name: "이라크 파병",
            description: "이라크 전쟁 관련 한국군 파병 결정."
          }
        ]
      },
      {
        year: 2004,
        isVote: false,
        issue: [
          {
            name: "탄핵 소추안 가결 및 기각",
            description: "국회의 대통령 탄핵 소추안 가결과 헌법재판소의 기각 결정."
          },
          {
            name: "KTX 개통",
            description: "한국 고속철도 KTX 서비스 개시."
          }
        ]
      },
      {
        year: 2005,
        isVote: false,
        issue: [
          {
            name: "황우석 줄기세포 논문 조작 사건",
            description: "황우석 교수의 줄기세포 연구 논문 조작 파문."
          },
          {
            name: "국가보안법 개정 논란",
            description: "국가보안법 폐지 또는 개정을 둘러싼 사회적 논란."
          }
        ]
      },
      {
        year: 2006,
        isVote: false,
        issue: [
          {
            name: "북한 첫 핵실험",
            description: "북한의 최초 핵실험 강행. 한반도 안보 위기 고조."
          },
          {
            name: "한미 FTA 협상 타결",
            description: "한국과 미국 간 자유무역협정(FTA) 협상 타결."
          }
        ]
      },
      {
        year: 2007,
        isVote: true,
        issue: [
          {
            name: "제2차 남북정상회담",
            description: "노무현 대통령과 김정일 국방위원장 간 평양 정상회담 개최."
          },
          {
            name: "이명박 제17대 대통령 당선",
            description: "한나라당 이명박 후보 대통령 당선."
          }
        ]
      },
      {
        year: 2013,
        isVote: false,
        issue: [
          {
            name: "이명박 정부 출범",
            description: "실용주의를 표방한 이명박 정부 출범."
          },
          {
            name: "미국산 쇠고기 수입 반대 촛불집회",
            description: "미국산 쇠고기 수입 반대를 위한 대규모 촛불집회 개최."
          }
        ]
      },
      {
        year: 2009,
        isVote: false,
        issue: [
          {
            name: "노무현 전 대통령 서거",
            description: "노무현 전 대통령 서거로 인한 국민적 충격과 애도."
          },
          {
            name: "신종플루 대유행",
            description: "신종인플루엔자 A(H1N1) 대유행으로 인한 보건 위기."
          }
        ]
      },
      {
        year: 2010,
        isVote: false,
        issue: [
          {
            name: "천안함 침몰 사건",
            description: "서해에서 천안함 침몰. 북한의 어뢰 공격으로 결론."
          },
          {
            name: "연평도 포격 사건",
            description: "북한의 연평도 포격으로 인한 민간인 사상자 발생. 한반도 긴장 고조."
          }
        ]
      },
      {
        year: 2011,
        isVote: false,
        issue: [
          {
            name: "한EU FTA 발효",
            description: "한국과 유럽연합(EU) 간 자유무역협정 발효."
          },
          {
            name: "김정일 사망",
            description: "북한 국방위원장 김정일 사망. 김정은 체제 출범 예고."
          }
        ]
      },
      {
        year: 2012,
        isVote: false,
        issue: [
          {
            name: "박근혜 제18대 대통령 당선",
            description: "새누리당 박근혜 후보, 한국 최초의 여성 대통령으로 당선."
          },
          {
            name: "한중 FTA 협상 개시",
            description: "한국과 중국 간 자유무역협정 협상 시작."
          }
        ]
      },

  {
    year: 2013,
    isVote: false,
    issue: [
      {
        name: "박근혜 정부 출범",
        description: "한국 최초의 여성 대통령인 박근혜 정부 출범. '창조경제'와 '국민행복' 강조."
      },
      {
        name: "북한 3차 핵실험",
        description: "북한의 3차 핵실험 강행으로 한반도 긴장 고조 및 국제사회의 대북 제재 강화."
      }
    ]
  },
  {
    year: 2014,
    isVote: false,
    issue: [
      {
        name: "세월호 침몰 사고",
        description: "진도 해상에서 여객선 세월호 침몰. 304명 사망·실종의 대형 참사 발생."
      },
      {
        name: "국정원 대선 개입 의혹",
        description: "2012년 대선 당시 국가정보원의 선거 개입 의혹으로 정치적 갈등 심화."
      }
    ]
  },
  {
    year: 2015,
    isVote: false,
    issue: [
      {
        name: "메르스(MERS) 사태",
        description: "중동호흡기증후군(MERS) 국내 유행으로 38명 사망, 사회·경제적 혼란 발생."
      },
      {
        name: "한일 위안부 합의",
        description: "한국과 일본 정부 간 일본군 위안부 문제에 대한 합의 도출. 논란 지속."
      }
    ]
  },
  {
    year: 2016,
    isVote: false,
    issue: [
      {
        name: "박근혜-최순실 국정농단 사태",
        description: "최순실의 국정 개입 의혹 제기. 대규모 촛불집회 등 정국 혼란 지속."
      },
      {
        name: "사드(THAAD) 배치 결정",
        description: "한미 양국, 주한미군 사드 배치 결정. 중국의 경제 보복 조치 시작."
      }
    ]
  },
  {
    year: 2017,
    isVote: false,
    issue: [
      {
        name: "박근혜 대통령 탄핵",
        description: "헌법재판소, 박근혜 대통령 탄핵 인용. 대통령 파면."
      },
      {
        name: "문재인 제19대 대통령 당선",
        description: "조기 대선에서 더불어민주당 문재인 후보 당선. 문재인 정부 출범."
      },
      {
        name: "북한 6차 핵실험",
        description: "북한의 6차 핵실험으로 한반도 긴장 고조. 국제사회의 대북 제재 강화."
      }
    ]
  },
  {
    year: 2018,
    isVote: false,
    issue: [
      {
        name: "평창 동계올림픽 개최",
        description: "평창에서 동계올림픽 개최. 남북 단일팀 구성 등 한반도 평화 분위기 조성."
      },
      {
        name: "남북정상회담 개최",
        description: "판문점과 평양에서 남북정상회담 개최. '판문점 선언' 및 '9월 평양공동선언' 채택."
      },
      {
        name: "첫 북미정상회담",
        description: "싱가포르에서 역사상 첫 북미정상회담 개최. 한반도 비핵화 논의."
      }
    ]
  },
  {
    year: 2019,
    isVote: false,
    issue: [
      {
        name: "일본의 수출규제",
        description: "일본, 한국에 대한 수출규제 강화. 양국 관계 악화 및 경제적 영향."
      },
      {
        name: "조국 법무부 장관 임명 논란",
        description: "조국 법무부 장관 임명을 둘러싼 정치적 갈등 및 대규모 집회 발생."
      }
    ]
  },
  {
    year: 2020,
    isVote: false,
    issue: [
      {
        name: "코로나19 팬데믹",
        description: "코로나19의 전 세계적 확산. 사회적 거리두기 등 방역 조치 시행."
      },
      {
        name: "제21대 국회의원 선거",
        description: "더불어민주당의 압승으로 끝난 총선. 180석 확보로 거대 여당 탄생."
      }
    ]
  },
  {
    year: 2021,
    isVote: false,
    issue: [
      {
        name: "코로나19 백신 접종 시작",
        description: "국내 코로나19 백신 접종 시작. 단계적 일상회복(위드 코로나) 추진."
      },
      {
        name: "부동산 가격 급등",
        description: "수도권을 중심으로 한 부동산 가격 급등. 정부의 부동산 대책 논란."
      }
    ]
  },
  {
    year: 2022,
    isVote: false,
    issue: [
      {
        name: "윤석열 제20대 대통령 당선",
        description: "국민의힘 윤석열 후보, 근소한 차이로 대통령 선거 승리."
      },
      {
        name: "이태원 압사 참사",
        description: "서울 이태원에서 할로윈 축제 중 압사 사고 발생. 158명 사망."
      },
      {
        name: "윤석열 정부 출범",
        description: "윤석열 정부 출범. '자유민주주의와 시장경제' 강조."
      }
    ]
  },
  {
    year: 2023,
    isVote: false,
    issue: [
      {
        name: "한일 관계 개선",
        description: "강제징용 배상 문제 해결 방안 발표. 한일 정상회담 개최 등 관계 개선 움직임."
      },
      {
        name: "우크라이나 전쟁 지속",
        description: "러시아의 우크라이나 침공 장기화. 국제 정세 불안 및 경제적 영향 지속."
      },
      {
        name: "2030 부산세계박람회 유치 실패",
        description: "2030년 세계박람회 개최지 선정에서 부산이 사우디아라비아 리야드에 패배."
      }
    ]
  }
]
