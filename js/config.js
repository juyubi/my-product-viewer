const CONFIG = {
  IMAGE_OBJECT_COUNT: 300,
  SPREAD_RANGE: 60, // Used for Random and Flow initial spread
  DEFAULT_BG_COLOR: "#000000",
  HOVER_SCALE_FACTOR: 1.2,
  CLICK_PLANE_SCALE: 1.7, // 모바일에서 더 큰 클릭 영역을 위해 증가
  TOUCH_TOLERANCE: 0.1, // 터치 감지 민감도 추가
  isMobile:
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ),
  CAMERA: {
    MOBILE: { Z: 55, MIN_DISTANCE: 3, MAX_DISTANCE: 120 },
    DESKTOP: { Z: 40, MIN_DISTANCE: 3, MAX_DISTANCE: 100 },
  },
  LIGHT: {
    AMBIENT: { COLOR: 0x808080, INTENSITY: 1.8 },
    POINT: {
      COLORS: [0xffaa00, 0x00aaff, 0xff00ff, 0xaaffaa],
      INTENSITY: 2.5,
      DISTANCE: 100,
      DECAY: 1.5,
    },
  },
  ANIMATION: {
    THROTTLE: 16, // ms between pointer move updates
    ROTATION_SPEED: 0.002, // Base rotation for random layout
    TRANSITION_DURATION: 1.5, // seconds for layout change
    // --- Add specific animation params ---
    GRID_IDLE_ROT_SPEED: 0.03,
    SPIRAL_STRUCT_ROT_SPEED: 0.02,
    SPIRAL_SELF_ROT_SPEED: 0.1,
  },
  PARTICLES: {
    DESKTOP_COUNT: 5000,
    MOBILE_COUNT: 1500,
    SPREAD_RADIUS: 150,
  },
  LAYOUT: {
    SPHERE: {
      RADIUS: 25,
      SPREAD: 0.05, // Randomness factor for radius
      ORBIT_SPEED: 0.02, // Speed items orbit the center (0.01에서 0.02로 증가)
      SELF_ROTATION_SPEED: 0.05, // Speed items spin (0.03에서 0.05로 증가)
    },
    GRID: {
      COLUMNS: 13,
      SPACING: 4,
      POSITION_JITTER: 0.4,
      ROTATION_JITTER: 0.15,
    },
    SPIRAL: {
      RADIUS: 25,
      TURNS: 2.5,
      SPREAD: 0.1, // Radius randomness
      HEIGHT_FACTOR: 1.2, // How tall the spiral is
      WAVE_FREQ: 0.8, // Frequency of the up/down wave
      WAVE_AMP: 4.5, // Amplitude of the up/down wave
    },
    RANDOM: {
      SPREAD: 0.05, // Not used directly, SPREAD_RANGE defines area
      FLOAT_AMPLITUDE: 0.1,
      FLOAT_SPEED: 0.1,
    },
    // --- New Layout Configs ---
    FLOW: {
      NOISE_SCALE: 0.1, // 더 부드럽고 자연스러운 흐름을 위해 낮춤
      SPEED: 0.06, // 패턴 변화를 적절한 속도로 조정
      FORCE: 0.9, // 움직임의 강도를 자연스럽게 조정
      ROTATION_DAMPING: 0.97, // 회전을 더 부드럽게
      MAX_SPEED: 0.6, // 최대 속도를 적절하게 조정
    },
    WAVEGRID: {
      // Inherits Grid settings for base layout
      EFFECT_RADIUS: 15.0, // How far the mouse wave reaches
      MAX_DISPLACEMENT: 2.0, // Max Z displacement
      WAVE_SPEED: 3.0, // How fast the wave ripples
      DAMPING: 0.9, // How quickly items return to base position (lower = slower)
    },
    PANORAMA: {
      NUM_LAYERS: 5, // 레이어 수를 5개로 증가
      LAYER_DEPTH: 10.0, // 레이어 간 거리를 더 줄여서 5개 레이어에 맞게 조정
      RADIUS: 28.0, // 반경을 약각 줄여서 5개 레이어에 맞게 조정
      ITEM_SPACING_X: 3.2, // 아이템 간 간격을 조정
      ITEM_SPACING_Y: 3.2,
      ARRANGEMENT: "cylindrical",
      PARALLAX_FACTOR: 0.08, // 패럴랙스 효과를 더 강화
      LAYER_ROTATION_SPEED: 0.015, // 회전 속도를 더 빠르게 조정
      LAYER_OSCILLATION: {
        // 레이어별 진동 효과 조정
        AMPLITUDE: 0.6,
        FREQUENCY: 0.4,
      },
    },
  },
};

export default CONFIG;
