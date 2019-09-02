const games = [
  { x: 61, y: 15 },
  { x: 97, y: 7.02 },
  { x: 97, y: 9.66 },
  { x: 88, y: 9.04 },
  { x: 87, y: 9.7 },
  { x: 83, y: 4.99 },
  { x: 83, y: 8.25 },
  { x: 88, y: 5.54 },
  { x: 85, y: 5.03 },
  { x: 88, y: 5.99 },
  { x: 97, y: 3.96 },
  { x: 90, y: 4.89 },
  { x: 84, y: 2.96 },
  { x: 73, y: 6.73 },
  { x: 74, y: 5.95 },
  { x: 78, y: 3.66 },
  { x: 91, y: 7.04 },
  { x: 87, y: 6.65 },
  { x: 74, y: 5.8 },
  { x: 71, y: 4.1 },
  { x: 88, y: 2.03 },
  { x: 96, y: 5.05 },
  { x: 82, y: 1.12 },
  { x: 68, y: 1.75 },
  { x: 88, y: 1.06 },
  { x: 83, y: 2.81 },
  { x: 85, y: 0.66 },
  { x: 97, y: 3.56 },
  { x: 84, y: 4.46 },
  { x: 85, y: 2.85 },
  { x: 87, y: 2.53 },
  { x: 88, y: 3.15 },
  { x: 74, y: 4.05 },
  { x: 92, y: 2.77 },
  { x: 95, y: 2.79 },
  { x: 86, y: 0.78 },
  { x: 85, y: 2.64 },
  { x: 87, y: 3.17 },
  { x: 92, y: 2.55 },
  { x: 95, y: 3.7 },
  { x: 91, y: 4.05 },
  { x: 73, y: 3.92 },
  { x: 82, y: 0.8 },
  { x: 95, y: 2.41 },
  { x: 76, y: 2.49 },
  { x: 96, y: 2.71 },
  { x: 97, y: 2.81 },
  { x: 93, y: 1.85 },
  { x: 84, y: 3.13 },
  { x: 81, y: 3.22 },
  { x: 84, y: 2.3 },
  { x: 90, y: 1.09 },
  { x: 88, y: 2.44 },
  { x: 80, y: 3.59 },
  { x: 89, y: 0.61 },
  { x: 93, y: 2.57 },
  { x: 92, y: 2.74 },
  { x: 94, y: 2.99 },
  { x: 86, y: 2.07 },
  { x: 86, y: 1.8 },
  { x: 91, y: 2.08 },
  { x: 84, y: 2.78 },
  { x: 77, y: 1.61 },
  { x: 81, y: 1.54 },
  { x: 77, y: 2.52 },
  { x: 56, y: 2.64 },
  { x: 93, y: 2.11 },
  { x: 80, y: 1.41 },
  { x: 88, y: 2.51 },
  { x: 84, y: 0.92 },
  { x: 80, y: 2.25 },
  { x: 88, y: 1.1 },
  { x: 84, y: 2.66 },
  { x: 80, y: 1.4 },
  { x: 85, y: 1.13 },
  { x: 92, y: 1.02 },
  { x: 70, y: 1.19 },
  { x: 87, y: 1.53 },
  { x: 93, y: 2.03 },
  { x: 86, y: 0.68 },
  { x: 94, y: 1.16 },
  { x: 87, y: 2.49 },
  { x: 76, y: 2.13 },
  { x: 78, y: 1.78 },
  { x: 80, y: 1.35 },
  { x: 88, y: 1.33 },
  { x: 85, y: 1.35 },
  { x: 88, y: 0.71 },
  { x: 72, y: 2.27 },
  { x: 89, y: 2.85 },
  { x: 80, y: 1.3 },
  { x: 79, y: 2.15 },
  { x: 88, y: 2.1 },
  { x: 93, y: 1.09 },
  { x: 91, y: 1.83 },
  { x: 76, y: 0.81 },
  { x: 75, y: 2.14 },
  { x: 90, y: 0.88 },
  { x: 86, y: 1.9 },
  { x: 82, y: 2.61 },
  { x: 84, y: 0.89 },
  { x: 83, y: 2.34 },
  { x: 81, y: 0.72 },
  { x: 85, y: 1.91 },
  { x: 88, y: 1.18 },
  { x: 82, y: 2.15 },
  { x: 89, y: 1.27 },
  { x: 73, y: 1.06 },
  { x: 82, y: 1.52 },
  { x: 91, y: 1.4 },
  { x: 74, y: 0.88 },
  { x: 96, y: 1.99 },
  { x: 66, y: 0.51 },
  { x: 70, y: 1 },
  { x: 89, y: 1.89 },
  { x: 93, y: 1.94 },
  { x: 87, y: 1.29 },
  { x: 87, y: 0.61 },
  { x: 91, y: 1.38 },
  { x: 73, y: 2.04 },
  { x: 88, y: 2.6 },
  { x: 85, y: 1.58 },
  { x: 84, y: 1.01 },
  { x: 86, y: 1.84 },
  { x: 88, y: 1.33 },
  { x: 78, y: 1.88 },
  { x: 81, y: 2.53 },
  { x: 83, y: 1.07 },
  { x: 84, y: 1.98 },
  { x: 90, y: 1.87 },
  { x: 75, y: 1.28 },
  { x: 80, y: 1.28 },
  { x: 89, y: 1.05 },
  { x: 81, y: 1.35 },
  { x: 89, y: 0.89 },
  { x: 83, y: 1.5 },
  { x: 84, y: 1.45 },
  { x: 84, y: 1.25 },
  { x: 89, y: 1.52 },
  { x: 78, y: 2.42 },
  { x: 73, y: 0.89 },
  { x: 84, y: 2.38 },
  { x: 79, y: 1.63 },
  { x: 79, y: 0.78 },
  { x: 80, y: 1.47 },
  { x: 90, y: 2.31 },
  { x: 74, y: 1.56 },
  { x: 83, y: 2.11 },
  { x: 87, y: 2.1 },
  { x: 78, y: 1.48 },
  { x: 92, y: 1.03 },
  { x: 90, y: 1.73 },
  { x: 82, y: 0.86 },
  { x: 83, y: 1.47 },
  { x: 79, y: 1.28 },
  { x: 78, y: 1.46 },
  { x: 84, y: 2.08 },
  { x: 71, y: 1.65 },
  { x: 82, y: 1.44 },
  { x: 83, y: 2.04 },
  { x: 71, y: 1.48 },
  { x: 42, y: 1.74 },
  { x: 73, y: 1.73 },
  { x: 89, y: 1.15 },
  { x: 86, y: 1.95 },
  { x: 66, y: 1.38 },
  { x: 90, y: 0.96 },
  { x: 75, y: 1.12 },
  { x: 76, y: 1.07 },
  { x: 72, y: 1.07 },
  { x: 76, y: 1.27 },
  { x: 71, y: 1.08 },
  { x: 76, y: 0.6 },
  { x: 87, y: 1.28 },
  { x: 79, y: 1.93 },
  { x: 80, y: 1.23 },
  { x: 77, y: 1.25 },
  { x: 80, y: 1.98 },
  { x: 91, y: 1.05 },
  { x: 80, y: 1.24 },
  { x: 73, y: 0.55 },
  { x: 79, y: 1.21 },
  { x: 88, y: 1.03 },
  { x: 88, y: 1.45 },
  { x: 81, y: 1.54 },
  { x: 82, y: 0.6 },
  { x: 80, y: 1.29 },
  { x: 82, y: 1.28 },
  { x: 90, y: 0.81 },
  { x: 83, y: 0.59 },
  { x: 90, y: 1.62 },
  { x: 84, y: 1.44 },
  { x: 73, y: 0.71 },
  { x: 86, y: 1.63 },
  { x: 89, y: 1.84 },
  { x: 74, y: 0.96 },
  { x: 90, y: 1.77 },
  { x: 95, y: 1.41 },
  { x: 64, y: 0.88 },
  { x: 82, y: 0.63 },
  { x: 86, y: 1.45 },
  { x: 89, y: 0.75 },
  { x: 70, y: 1.47 },
  { x: 81, y: 1.25 },
  { x: 92, y: 0.9 },
  { x: 64, y: 0.58 },
  { x: 89, y: 0.73 },
  { x: 80, y: 0.79 },
  { x: 80, y: 0.73 },
  { x: 85, y: 0.82 },
  { x: 67, y: 1.12 },
  { x: 78, y: 0.73 },
  { x: 93, y: 1.22 },
  { x: 86, y: 0.78 },
  { x: 57, y: 0.62 },
  { x: 86, y: 0.72 },
  { x: 79, y: 0.66 },
  { x: 74, y: 1.15 },
  { x: 88, y: 1.25 },
  { x: 76, y: 1.6 },
  { x: 87, y: 0.59 },
  { x: 82, y: 0.77 },
  { x: 80, y: 0.61 },
  { x: 70, y: 0.92 },
  { x: 83, y: 1.05 },
  { x: 82, y: 0.84 },
  { x: 89, y: 1.41 },
  { x: 87, y: 0.73 },
  { x: 75, y: 0.55 },
  { x: 76, y: 1.01 },
  { x: 82, y: 1.25 },
  { x: 55, y: 1.05 },
  { x: 63, y: 0.61 },
  { x: 79, y: 0.68 },
  { x: 82, y: 1.37 },
  { x: 88, y: 1.06 },
  { x: 95, y: 0.83 },
  { x: 74, y: 0.59 },
  { x: 71, y: 0.63 },
  { x: 94, y: 0.72 },
  { x: 78, y: 0.92 },
  { x: 90, y: 0.98 },
  { x: 86, y: 0.83 },
  { x: 81, y: 1.01 },
  { x: 79, y: 0.9 },
  { x: 89, y: 0.65 },
  { x: 77, y: 0.58 },
  { x: 82, y: 0.8 },
  { x: 70, y: 0.52 },
  { x: 86, y: 0.86 },
  { x: 74, y: 1.02 },
  { x: 83, y: 0.59 },
  { x: 81, y: 0.82 },
  { x: 81, y: 0.59 },
  { x: 75, y: 0.88 },
  { x: 76, y: 0.6 },
  { x: 66, y: 0.69 },
  { x: 78, y: 1.06 },
  { x: 79, y: 0.92 },
  { x: 78, y: 0.9 },
  { x: 80, y: 1.31 },
  { x: 83, y: 0.62 },
  { x: 73, y: 0.73 },
  { x: 79, y: 0.95 },
  { x: 74, y: 0.85 },
  { x: 88, y: 0.85 },
  { x: 80, y: 0.53 },
  { x: 89, y: 0.72 },
  { x: 74, y: 0.64 },
  { x: 83, y: 0.7 },
  { x: 90, y: 0.94 },
  { x: 85, y: 0.6 },
  { x: 63, y: 0.8 },
  { x: 79, y: 0.75 },
  { x: 85, y: 0.88 },
  { x: 83, y: 0.64 },
  { x: 75, y: 0.84 },
  { x: 33, y: 0.71 },
  { x: 79, y: 0.93 },
  { x: 81, y: 1.06 },
  { x: 70, y: 0.83 },
  { x: 94, y: 0.78 },
  { x: 59, y: 1.02 },
  { x: 85, y: 0.89 },
  { x: 74, y: 0.97 },
  { x: 61, y: 0.95 },
  { x: 52, y: 0.92 },
  { x: 93, y: 0.63 },
  { x: 89, y: 0.73 },
  { x: 85, y: 0.8 },
  { x: 87, y: 0.9 },
  { x: 81, y: 0.97 },
  { x: 60, y: 0.83 },
  { x: 86, y: 1.03 },
  { x: 86, y: 0.55 },
  { x: 77, y: 0.71 },
  { x: 89, y: 0.76 },
  { x: 80, y: 0.8 },
  { x: 68, y: 0.63 },
  { x: 83, y: 0.87 },
  { x: 76, y: 0.51 },
  { x: 87, y: 0.73 },
  { x: 84, y: 0.78 },
  { x: 79, y: 0.85 },
  { x: 84, y: 0.71 },
  { x: 84, y: 0.81 },
  { x: 74, y: 0.77 },
  { x: 83, y: 0.66 },
  { x: 83, y: 0.86 },
  { x: 84, y: 0.9 },
  { x: 70, y: 0.53 },
  { x: 73, y: 0.79 },
  { x: 79, y: 0.55 },
  { x: 91, y: 0.69 },
  { x: 78, y: 0.62 },
  { x: 80, y: 0.75 },
  { x: 78, y: 0.62 },
  { x: 74, y: 0.86 },
  { x: 84, y: 0.51 },
  { x: 79, y: 0.69 },
  { x: 77, y: 0.78 },
  { x: 69, y: 0.69 },
  { x: 71, y: 0.74 },
  { x: 78, y: 0.72 },
  { x: 79, y: 0.76 },
  { x: 76, y: 0.56 },
  { x: 83, y: 1.08 },
  { x: 80, y: 0.64 },
  { x: 76, y: 0.58 },
  { x: 85, y: 0.55 },
  { x: 71, y: 0.72 },
  { x: 81, y: 0.53 },
  { x: 89, y: 0.85 },
  { x: 77, y: 0.9 },
  { x: 72, y: 0.53 },
  { x: 84, y: 0.59 },
  { x: 76, y: 0.52 },
  { x: 77, y: 0.7 },
  { x: 45, y: 0.54 },
  { x: 53, y: 0.59 },
  { x: 81, y: 0.63 },
  { x: 67, y: 0.61 },
  { x: 73, y: 0.53 },
  { x: 80, y: 0.53 },
  { x: 77, y: 0.84 },
  { x: 70, y: 0.63 },
  { x: 79, y: 0.72 },
  { x: 75, y: 0.64 },
  { x: 81, y: 0.9 },
  { x: 77, y: 1.01 },
  { x: 47, y: 0.74 },
  { x: 66, y: 0.61 },
  { x: 76, y: 1.02 },
  { x: 75, y: 0.64 },
  { x: 69, y: 0.51 },
  { x: 91, y: 0.63 },
  { x: 64, y: 0.55 },
  { x: 83, y: 0.67 },
  { x: 68, y: 0.59 },
  { x: 86, y: 0.55 },
  { x: 73, y: 0.54 },
  { x: 86, y: 0.56 },
  { x: 90, y: 0.86 },
  { x: 61, y: 0.64 },
  { x: 84, y: 0.61 },
  { x: 80, y: 0.56 },
  { x: 72, y: 0.58 },
  { x: 77, y: 0.52 },
  { x: 79, y: 0.72 },
  { x: 82, y: 0.94 },
  { x: 85, y: 0.72 },
  { x: 89, y: 0.64 },
  { x: 78, y: 0.64 },
  { x: 82, y: 0.57 },
  { x: 78, y: 0.53 },
  { x: 73, y: 0.62 },
  { x: 85, y: 0.56 },
  { x: 66, y: 0.53 },
  { x: 39, y: 0.87 },
  { x: 86, y: 0.86 },
  { x: 80, y: 0.68 },
  { x: 82, y: 0.58 },
  { x: 87, y: 0.86 },
  { x: 73, y: 0.63 },
  { x: 78, y: 0.52 },
  { x: 86, y: 0.7 },
  { x: 76, y: 0.51 },
  { x: 74, y: 0.63 },
  { x: 68, y: 0.73 },
  { x: 67, y: 0.66 },
  { x: 80, y: 0.52 },
  { x: 79, y: 0.82 },
  { x: 93, y: 0.73 },
  { x: 80, y: 0.55 },
  { x: 63, y: 0.62 },
  { x: 71, y: 0.6 },
  { x: 85, y: 0.79 },
  { x: 77, y: 0.75 },
  { x: 49, y: 0.52 },
  { x: 82, y: 0.78 },
  { x: 70, y: 0.55 },
  { x: 86, y: 0.64 },
  { x: 86, y: 0.57 },
  { x: 73, y: 0.67 },
  { x: 79, y: 0.51 },
  { x: 52, y: 0.55 },
  { x: 70, y: 0.53 },
  { x: 71, y: 0.52 },
  { x: 87, y: 0.67 },
  { x: 88, y: 0.61 },
  { x: 83, y: 0.58 },
  { x: 91, y: 0.66 },
  { x: 86, y: 0.55 },
  { x: 85, y: 0.52 },
  { x: 83, y: 0.51 },
  { x: 91, y: 0.53 },
  { x: 73, y: 0.56 },
  { x: 90, y: 0.54 }
];
export const scatter = {
  x: games.map(({ x }) => x),
  y: games.map(({ y }) => y),
  mode: "markers",
  type: "scatter"
};

export const layout = {  
  showlegend: false,
  xaxis: {
    title: "Meta-critic Score",
    range: [25, 100]
  },
  yaxis: {
    title: "Games sold in North America (millions)",
    range: [0, 4]
  }
};


const linePoints = [
  { "x": 25, "y": -0.1015 },
  { "x": 55, "y": 0.7415 },
  { "x": 75, "y": 1.3035 },
  { "x": 95, "y": 1.8655 }
]
export const lineOfBestFit = {
  x: linePoints.map(({ x }) => x),
  y: linePoints.map(({ y }) => y),
  mode: "scatter",
};