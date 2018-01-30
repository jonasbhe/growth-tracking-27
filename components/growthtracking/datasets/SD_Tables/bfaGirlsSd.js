const bfaGirlsSd = {
  0: { SD4neg:9.154, SD3neg:10.122, SD2neg:11.091, SD1neg:12.159, SD0:13.336, SD1:14.636, SD2:16.071, SD3:17.657, SD4:19.242},
  5: { SD4neg:8.590, SD3neg:9.702, SD2neg:10.815, SD1neg:11.996, SD0:13.247, SD1:14.569, SD2:15.963, SD3:17.429, SD4:18.895},
  10: { SD4neg:8.468, SD3neg:9.637, SD2neg:10.807, SD1neg:12.033, SD0:13.314, SD1:14.649, SD2:16.037, SD3:17.477, SD4:18.918},
  15: { SD4neg:8.710, SD3neg:9.863, SD2neg:11.017, SD1neg:12.235, SD0:13.517, SD1:14.864, SD2:16.276, SD3:17.752, SD4:19.228},
  20: { SD4neg:9.020, SD3neg:10.181, SD2neg:11.342, SD1neg:12.574, SD0:13.878, SD1:15.256, SD2:16.707, SD3:18.232, SD4:19.758},
  25: { SD4neg:9.310, SD3neg:10.481, SD2neg:11.653, SD1neg:12.901, SD0:14.228, SD1:15.635, SD2:17.123, SD3:18.696, SD4:20.268},
  30: { SD4neg:9.569, SD3neg:10.750, SD2neg:11.932, SD1neg:13.195, SD0:14.542, SD1:15.976, SD2:17.499, SD3:19.114, SD4:20.728},
  35: { SD4neg:9.795, SD3neg:10.985, SD2neg:12.175, SD1neg:13.451, SD0:14.816, SD1:16.273, SD2:17.826, SD3:19.477, SD4:21.129},
  40: { SD4neg:9.992, SD3neg:11.189, SD2neg:12.386, SD1neg:13.672, SD0:15.052, SD1:16.529, SD2:18.108, SD3:19.792, SD4:21.476},
  45: { SD4neg:10.167, SD3neg:11.369, SD2neg:12.572, SD1neg:13.867, SD0:15.259, SD1:16.754, SD2:18.355, SD3:20.068, SD4:21.781},
  50: { SD4neg:10.322, SD3neg:11.529, SD2neg:12.735, SD1neg:14.038, SD0:15.441, SD1:16.950, SD2:18.571, SD3:20.310, SD4:22.049},
  55: { SD4neg:10.460, SD3neg:11.670, SD2neg:12.881, SD1neg:14.189, SD0:15.601, SD1:17.124, SD2:18.762, SD3:20.524, SD4:22.286},
  60: { SD4neg:10.585, SD3neg:11.798, SD2neg:13.011, SD1neg:14.324, SD0:15.744, SD1:17.278, SD2:18.933, SD3:20.716, SD4:22.498},
  65: { SD4neg:10.698, SD3neg:11.913, SD2neg:13.128, SD1neg:14.446, SD0:15.873, SD1:17.417, SD2:19.086, SD3:20.888, SD4:22.690},
  70: { SD4neg:10.800, SD3neg:12.017, SD2neg:13.233, SD1neg:14.554, SD0:15.987, SD1:17.541, SD2:19.223, SD3:21.042, SD4:22.861},
  75: { SD4neg:10.893, SD3neg:12.110, SD2neg:13.328, SD1neg:14.651, SD0:16.090, SD1:17.651, SD2:19.344, SD3:21.179, SD4:23.013},
  80: { SD4neg:10.978, SD3neg:12.196, SD2neg:13.413, SD1neg:14.739, SD0:16.182, SD1:17.750, SD2:19.453, SD3:21.302, SD4:23.151},
  85: { SD4neg:11.055, SD3neg:12.273, SD2neg:13.491, SD1neg:14.818, SD0:16.264, SD1:17.839, SD2:19.551, SD3:21.413, SD4:23.275},
  90: { SD4neg:11.126, SD3neg:12.344, SD2neg:13.561, SD1neg:14.890, SD0:16.339, SD1:17.919, SD2:19.640, SD3:21.514, SD4:23.388},
  95: { SD4neg:11.191, SD3neg:12.408, SD2neg:13.625, SD1neg:14.955, SD0:16.406, SD1:17.991, SD2:19.720, SD3:21.605, SD4:23.490},
  100: { SD4neg:11.251, SD3neg:12.467, SD2neg:13.683, SD1neg:15.013, SD0:16.467, SD1:18.056, SD2:19.792, SD3:21.687, SD4:23.583},
  105: { SD4neg:11.306, SD3neg:12.521, SD2neg:13.736, SD1neg:15.067, SD0:16.522, SD1:18.115, SD2:19.857, SD3:21.761, SD4:23.666},
  110: { SD4neg:11.356, SD3neg:12.570, SD2neg:13.785, SD1neg:15.115, SD0:16.572, SD1:18.167, SD2:19.915, SD3:21.829, SD4:23.743},
  115: { SD4neg:11.403, SD3neg:12.616, SD2neg:13.829, SD1neg:15.158, SD0:16.616, SD1:18.215, SD2:19.968, SD3:21.889, SD4:23.811},
  120: { SD4neg:11.446, SD3neg:12.658, SD2neg:13.869, SD1neg:15.198, SD0:16.657, SD1:18.258, SD2:20.015, SD3:21.945, SD4:23.874},
  125: { SD4neg:11.487, SD3neg:12.696, SD2neg:13.906, SD1neg:15.235, SD0:16.694, SD1:18.297, SD2:20.059, SD3:21.995, SD4:23.931},
  130: { SD4neg:11.524, SD3neg:12.732, SD2neg:13.940, SD1neg:15.268, SD0:16.727, SD1:18.332, SD2:20.098, SD3:22.041, SD4:23.984},
  135: { SD4neg:11.558, SD3neg:12.765, SD2neg:13.971, SD1neg:15.298, SD0:16.758, SD1:18.364, SD2:20.133, SD3:22.082, SD4:24.031},
  140: { SD4neg:11.591, SD3neg:12.795, SD2neg:14.000, SD1neg:15.325, SD0:16.785, SD1:18.393, SD2:20.165, SD3:22.119, SD4:24.074},
  145: { SD4neg:11.620, SD3neg:12.823, SD2neg:14.025, SD1neg:15.350, SD0:16.809, SD1:18.418, SD2:20.193, SD3:22.153, SD4:24.112},
  150: { SD4neg:11.647, SD3neg:12.848, SD2neg:14.049, SD1neg:15.371, SD0:16.830, SD1:18.440, SD2:20.217, SD3:22.182, SD4:24.146},
  155: { SD4neg:11.672, SD3neg:12.871, SD2neg:14.069, SD1neg:15.391, SD0:16.849, SD1:18.459, SD2:20.239, SD3:22.208, SD4:24.177},
  160: { SD4neg:11.695, SD3neg:12.891, SD2neg:14.088, SD1neg:15.408, SD0:16.865, SD1:18.475, SD2:20.257, SD3:22.230, SD4:24.203},
  165: { SD4neg:11.716, SD3neg:12.910, SD2neg:14.104, SD1neg:15.422, SD0:16.878, SD1:18.489, SD2:20.273, SD3:22.249, SD4:24.226},
  170: { SD4neg:11.735, SD3neg:12.927, SD2neg:14.118, SD1neg:15.434, SD0:16.890, SD1:18.500, SD2:20.285, SD3:22.265, SD4:24.245},
  175: { SD4neg:11.752, SD3neg:12.941, SD2neg:14.130, SD1neg:15.445, SD0:16.899, SD1:18.509, SD2:20.295, SD3:22.279, SD4:24.262},
  180: { SD4neg:11.767, SD3neg:12.954, SD2neg:14.141, SD1neg:15.453, SD0:16.906, SD1:18.516, SD2:20.303, SD3:22.289, SD4:24.275},
  185: { SD4neg:11.780, SD3neg:12.964, SD2neg:14.149, SD1neg:15.459, SD0:16.910, SD1:18.520, SD2:20.308, SD3:22.296, SD4:24.285},
  190: { SD4neg:11.792, SD3neg:12.974, SD2neg:14.155, SD1neg:15.463, SD0:16.913, SD1:18.522, SD2:20.310, SD3:22.301, SD4:24.292},
  195: { SD4neg:11.802, SD3neg:12.981, SD2neg:14.160, SD1neg:15.466, SD0:16.914, SD1:18.522, SD2:20.310, SD3:22.303, SD4:24.295},
  200: { SD4neg:11.811, SD3neg:12.987, SD2neg:14.164, SD1neg:15.467, SD0:16.913, SD1:18.520, SD2:20.308, SD3:22.303, SD4:24.297},
  205: { SD4neg:11.818, SD3neg:12.992, SD2neg:14.165, SD1neg:15.466, SD0:16.910, SD1:18.515, SD2:20.304, SD3:22.299, SD4:24.295},
  210: { SD4neg:11.824, SD3neg:12.995, SD2neg:14.166, SD1neg:15.464, SD0:16.906, SD1:18.510, SD2:20.298, SD3:22.295, SD4:24.292},
  215: { SD4neg:11.829, SD3neg:12.996, SD2neg:14.164, SD1neg:15.460, SD0:16.900, SD1:18.502, SD2:20.290, SD3:22.288, SD4:24.285},
  220: { SD4neg:11.832, SD3neg:12.997, SD2neg:14.162, SD1neg:15.455, SD0:16.892, SD1:18.493, SD2:20.280, SD3:22.279, SD4:24.277},
  225: { SD4neg:11.834, SD3neg:12.996, SD2neg:14.158, SD1neg:15.448, SD0:16.883, SD1:18.483, SD2:20.269, SD3:22.268, SD4:24.268},
  230: { SD4neg:11.835, SD3neg:12.994, SD2neg:14.153, SD1neg:15.441, SD0:16.873, SD1:18.471, SD2:20.256, SD3:22.256, SD4:24.255},
  235: { SD4neg:11.835, SD3neg:12.991, SD2neg:14.147, SD1neg:15.432, SD0:16.862, SD1:18.458, SD2:20.242, SD3:22.242, SD4:24.242},
  240: { SD4neg:11.834, SD3neg:12.987, SD2neg:14.140, SD1neg:15.422, SD0:16.850, SD1:18.443, SD2:20.226, SD3:22.226, SD4:24.226},
  245: { SD4neg:11.832, SD3neg:12.982, SD2neg:14.132, SD1neg:15.411, SD0:16.836, SD1:18.428, SD2:20.210, SD3:22.209, SD4:24.209},
  250: { SD4neg:11.829, SD3neg:12.976, SD2neg:14.123, SD1neg:15.399, SD0:16.822, SD1:18.411, SD2:20.191, SD3:22.191, SD4:24.190},
  255: { SD4neg:11.826, SD3neg:12.970, SD2neg:14.114, SD1neg:15.387, SD0:16.806, SD1:18.393, SD2:20.172, SD3:22.171, SD4:24.170},
  260: { SD4neg:11.821, SD3neg:12.962, SD2neg:14.103, SD1neg:15.373, SD0:16.790, SD1:18.375, SD2:20.152, SD3:22.150, SD4:24.149},
  265: { SD4neg:11.817, SD3neg:12.954, SD2neg:14.092, SD1neg:15.359, SD0:16.773, SD1:18.355, SD2:20.131, SD3:22.128, SD4:24.126},
  270: { SD4neg:11.811, SD3neg:12.945, SD2neg:14.080, SD1neg:15.344, SD0:16.755, SD1:18.335, SD2:20.109, SD3:22.105, SD4:24.102},
  275: { SD4neg:11.804, SD3neg:12.936, SD2neg:14.067, SD1neg:15.328, SD0:16.737, SD1:18.314, SD2:20.086, SD3:22.082, SD4:24.078},
  280: { SD4neg:11.797, SD3neg:12.926, SD2neg:14.054, SD1neg:15.312, SD0:16.718, SD1:18.292, SD2:20.062, SD3:22.057, SD4:24.052},
  285: { SD4neg:11.790, SD3neg:12.915, SD2neg:14.041, SD1neg:15.295, SD0:16.698, SD1:18.270, SD2:20.038, SD3:22.032, SD4:24.026},
  290: { SD4neg:11.782, SD3neg:12.904, SD2neg:14.027, SD1neg:15.278, SD0:16.678, SD1:18.248, SD2:20.013, SD3:22.006, SD4:23.999},
  295: { SD4neg:11.774, SD3neg:12.893, SD2neg:14.012, SD1neg:15.261, SD0:16.658, SD1:18.225, SD2:19.988, SD3:21.980, SD4:23.971},
  300: { SD4neg:11.765, SD3neg:12.881, SD2neg:13.997, SD1neg:15.243, SD0:16.637, SD1:18.201, SD2:19.963, SD3:21.953, SD4:23.943},
  305: { SD4neg:11.756, SD3neg:12.869, SD2neg:13.983, SD1neg:15.225, SD0:16.616, SD1:18.177, SD2:19.937, SD3:21.925, SD4:23.914},
  310: { SD4neg:11.747, SD3neg:12.857, SD2neg:13.967, SD1neg:15.207, SD0:16.594, SD1:18.154, SD2:19.911, SD3:21.898, SD4:23.886},
  315: { SD4neg:11.738, SD3neg:12.845, SD2neg:13.952, SD1neg:15.188, SD0:16.573, SD1:18.129, SD2:19.884, SD3:21.870, SD4:23.856},
  320: { SD4neg:11.728, SD3neg:12.832, SD2neg:13.936, SD1neg:15.170, SD0:16.552, SD1:18.105, SD2:19.858, SD3:21.842, SD4:23.826},
  325: { SD4neg:11.718, SD3neg:12.819, SD2neg:13.920, SD1neg:15.151, SD0:16.530, SD1:18.081, SD2:19.832, SD3:21.814, SD4:23.797},
  330: { SD4neg:11.708, SD3neg:12.806, SD2neg:13.904, SD1neg:15.132, SD0:16.508, SD1:18.057, SD2:19.805, SD3:21.787, SD4:23.768},
  335: { SD4neg:11.698, SD3neg:12.794, SD2neg:13.889, SD1neg:15.113, SD0:16.487, SD1:18.032, SD2:19.778, SD3:21.758, SD4:23.738},
  340: { SD4neg:11.688, SD3neg:12.780, SD2neg:13.873, SD1neg:15.094, SD0:16.465, SD1:18.008, SD2:19.752, SD3:21.730, SD4:23.708},
  345: { SD4neg:11.678, SD3neg:12.767, SD2neg:13.857, SD1neg:15.076, SD0:16.443, SD1:17.984, SD2:19.725, SD3:21.702, SD4:23.679},
  350: { SD4neg:11.667, SD3neg:12.754, SD2neg:13.841, SD1neg:15.057, SD0:16.422, SD1:17.960, SD2:19.699, SD3:21.674, SD4:23.649},
  355: { SD4neg:11.657, SD3neg:12.741, SD2neg:13.825, SD1neg:15.038, SD0:16.400, SD1:17.936, SD2:19.673, SD3:21.646, SD4:23.620},
  360: { SD4neg:11.647, SD3neg:12.728, SD2neg:13.809, SD1neg:15.020, SD0:16.379, SD1:17.912, SD2:19.646, SD3:21.618, SD4:23.590},
  365: { SD4neg:11.637, SD3neg:12.715, SD2neg:13.794, SD1neg:15.001, SD0:16.358, SD1:17.888, SD2:19.620, SD3:21.591, SD4:23.561},
  370: { SD4neg:11.626, SD3neg:12.702, SD2neg:13.778, SD1neg:14.983, SD0:16.337, SD1:17.864, SD2:19.595, SD3:21.563, SD4:23.532},
  375: { SD4neg:11.616, SD3neg:12.689, SD2neg:13.763, SD1neg:14.965, SD0:16.316, SD1:17.841, SD2:19.569, SD3:21.536, SD4:23.503},
  380: { SD4neg:11.606, SD3neg:12.677, SD2neg:13.747, SD1neg:14.947, SD0:16.295, SD1:17.818, SD2:19.543, SD3:21.509, SD4:23.474},
  385: { SD4neg:11.596, SD3neg:12.664, SD2neg:13.732, SD1neg:14.928, SD0:16.274, SD1:17.795, SD2:19.518, SD3:21.482, SD4:23.446},
  390: { SD4neg:11.586, SD3neg:12.651, SD2neg:13.717, SD1neg:14.911, SD0:16.254, SD1:17.772, SD2:19.493, SD3:21.455, SD4:23.418},
  395: { SD4neg:11.576, SD3neg:12.639, SD2neg:13.701, SD1neg:14.893, SD0:16.234, SD1:17.749, SD2:19.469, SD3:21.430, SD4:23.390},
  400: { SD4neg:11.566, SD3neg:12.626, SD2neg:13.686, SD1neg:14.875, SD0:16.214, SD1:17.727, SD2:19.444, SD3:21.403, SD4:23.362},
  405: { SD4neg:11.556, SD3neg:12.614, SD2neg:13.672, SD1neg:14.858, SD0:16.194, SD1:17.704, SD2:19.420, SD3:21.378, SD4:23.335},
  410: { SD4neg:11.546, SD3neg:12.602, SD2neg:13.657, SD1neg:14.841, SD0:16.174, SD1:17.682, SD2:19.396, SD3:21.352, SD4:23.307},
  415: { SD4neg:11.536, SD3neg:12.590, SD2neg:13.643, SD1neg:14.824, SD0:16.155, SD1:17.661, SD2:19.372, SD3:21.327, SD4:23.281},
  420: { SD4neg:11.527, SD3neg:12.577, SD2neg:13.628, SD1neg:14.807, SD0:16.136, SD1:17.639, SD2:19.349, SD3:21.302, SD4:23.255},
  425: { SD4neg:11.518, SD3neg:12.566, SD2neg:13.614, SD1neg:14.791, SD0:16.117, SD1:17.618, SD2:19.325, SD3:21.277, SD4:23.228},
  430: { SD4neg:11.508, SD3neg:12.554, SD2neg:13.600, SD1neg:14.774, SD0:16.098, SD1:17.597, SD2:19.302, SD3:21.252, SD4:23.202},
  435: { SD4neg:11.499, SD3neg:12.542, SD2neg:13.586, SD1neg:14.758, SD0:16.080, SD1:17.577, SD2:19.280, SD3:21.228, SD4:23.177},
  440: { SD4neg:11.490, SD3neg:12.531, SD2neg:13.573, SD1neg:14.742, SD0:16.062, SD1:17.556, SD2:19.258, SD3:21.205, SD4:23.152},
  445: { SD4neg:11.480, SD3neg:12.520, SD2neg:13.559, SD1neg:14.727, SD0:16.044, SD1:17.536, SD2:19.236, SD3:21.181, SD4:23.127},
  450: { SD4neg:11.471, SD3neg:12.509, SD2neg:13.546, SD1neg:14.711, SD0:16.026, SD1:17.516, SD2:19.214, SD3:21.158, SD4:23.102},
  455: { SD4neg:11.463, SD3neg:12.498, SD2neg:13.533, SD1neg:14.696, SD0:16.008, SD1:17.497, SD2:19.192, SD3:21.135, SD4:23.078},
  460: { SD4neg:11.454, SD3neg:12.487, SD2neg:13.520, SD1neg:14.681, SD0:15.991, SD1:17.477, SD2:19.171, SD3:21.113, SD4:23.054},
  465: { SD4neg:11.445, SD3neg:12.476, SD2neg:13.507, SD1neg:14.666, SD0:15.974, SD1:17.458, SD2:19.150, SD3:21.090, SD4:23.030},
  470: { SD4neg:11.437, SD3neg:12.466, SD2neg:13.494, SD1neg:14.651, SD0:15.957, SD1:17.439, SD2:19.129, SD3:21.068, SD4:23.007},
  475: { SD4neg:11.429, SD3neg:12.455, SD2neg:13.482, SD1neg:14.636, SD0:15.940, SD1:17.421, SD2:19.109, SD3:21.046, SD4:22.984},
  480: { SD4neg:11.420, SD3neg:12.445, SD2neg:13.470, SD1neg:14.622, SD0:15.924, SD1:17.402, SD2:19.089, SD3:21.025, SD4:22.961},
  485: { SD4neg:11.412, SD3neg:12.435, SD2neg:13.458, SD1neg:14.608, SD0:15.908, SD1:17.384, SD2:19.069, SD3:21.004, SD4:22.939},
  490: { SD4neg:11.404, SD3neg:12.425, SD2neg:13.446, SD1neg:14.594, SD0:15.892, SD1:17.366, SD2:19.050, SD3:20.984, SD4:22.917},
  495: { SD4neg:11.397, SD3neg:12.415, SD2neg:13.434, SD1neg:14.581, SD0:15.877, SD1:17.349, SD2:19.031, SD3:20.963, SD4:22.895},
  500: { SD4neg:11.389, SD3neg:12.406, SD2neg:13.423, SD1neg:14.567, SD0:15.861, SD1:17.332, SD2:19.012, SD3:20.943, SD4:22.874},
  505: { SD4neg:11.381, SD3neg:12.396, SD2neg:13.411, SD1neg:14.554, SD0:15.846, SD1:17.315, SD2:18.993, SD3:20.923, SD4:22.853},
  510: { SD4neg:11.374, SD3neg:12.387, SD2neg:13.400, SD1neg:14.541, SD0:15.831, SD1:17.298, SD2:18.975, SD3:20.904, SD4:22.833},
  515: { SD4neg:11.366, SD3neg:12.378, SD2neg:13.389, SD1neg:14.528, SD0:15.817, SD1:17.282, SD2:18.957, SD3:20.885, SD4:22.813},
  520: { SD4neg:11.359, SD3neg:12.369, SD2neg:13.379, SD1neg:14.516, SD0:15.802, SD1:17.266, SD2:18.939, SD3:20.866, SD4:22.792},
  525: { SD4neg:11.352, SD3neg:12.360, SD2neg:13.368, SD1neg:14.503, SD0:15.788, SD1:17.250, SD2:18.922, SD3:20.848, SD4:22.773},
  530: { SD4neg:11.346, SD3neg:12.352, SD2neg:13.358, SD1neg:14.491, SD0:15.774, SD1:17.234, SD2:18.905, SD3:20.829, SD4:22.754},
  535: { SD4neg:11.339, SD3neg:12.343, SD2neg:13.348, SD1neg:14.479, SD0:15.760, SD1:17.219, SD2:18.888, SD3:20.812, SD4:22.735},
  540: { SD4neg:11.332, SD3neg:12.335, SD2neg:13.338, SD1neg:14.468, SD0:15.747, SD1:17.204, SD2:18.871, SD3:20.794, SD4:22.716},
  545: { SD4neg:11.326, SD3neg:12.327, SD2neg:13.328, SD1neg:14.456, SD0:15.734, SD1:17.189, SD2:18.855, SD3:20.777, SD4:22.698},
  550: { SD4neg:11.319, SD3neg:12.319, SD2neg:13.318, SD1neg:14.445, SD0:15.721, SD1:17.174, SD2:18.840, SD3:20.760, SD4:22.680},
  555: { SD4neg:11.313, SD3neg:12.311, SD2neg:13.309, SD1neg:14.434, SD0:15.708, SD1:17.160, SD2:18.824, SD3:20.743, SD4:22.662},
  560: { SD4neg:11.307, SD3neg:12.303, SD2neg:13.299, SD1neg:14.423, SD0:15.696, SD1:17.146, SD2:18.808, SD3:20.727, SD4:22.645},
  565: { SD4neg:11.301, SD3neg:12.296, SD2neg:13.290, SD1neg:14.412, SD0:15.683, SD1:17.132, SD2:18.793, SD3:20.711, SD4:22.628},
  570: { SD4neg:11.295, SD3neg:12.288, SD2neg:13.281, SD1neg:14.401, SD0:15.671, SD1:17.119, SD2:18.779, SD3:20.695, SD4:22.612},
  575: { SD4neg:11.290, SD3neg:12.281, SD2neg:13.273, SD1neg:14.391, SD0:15.659, SD1:17.105, SD2:18.764, SD3:20.679, SD4:22.595},
  580: { SD4neg:11.284, SD3neg:12.274, SD2neg:13.264, SD1neg:14.381, SD0:15.648, SD1:17.092, SD2:18.749, SD3:20.664, SD4:22.579},
  585: { SD4neg:11.278, SD3neg:12.267, SD2neg:13.256, SD1neg:14.371, SD0:15.636, SD1:17.079, SD2:18.736, SD3:20.649, SD4:22.563},
  590: { SD4neg:11.273, SD3neg:12.260, SD2neg:13.248, SD1neg:14.362, SD0:15.625, SD1:17.067, SD2:18.722, SD3:20.635, SD4:22.548},
  595: { SD4neg:11.268, SD3neg:12.254, SD2neg:13.240, SD1neg:14.352, SD0:15.614, SD1:17.055, SD2:18.708, SD3:20.621, SD4:22.533},
  600: { SD4neg:11.263, SD3neg:12.247, SD2neg:13.232, SD1neg:14.343, SD0:15.604, SD1:17.043, SD2:18.695, SD3:20.607, SD4:22.518},
  605: { SD4neg:11.258, SD3neg:12.241, SD2neg:13.224, SD1neg:14.334, SD0:15.593, SD1:17.031, SD2:18.682, SD3:20.593, SD4:22.504},
  610: { SD4neg:11.253, SD3neg:12.235, SD2neg:13.217, SD1neg:14.325, SD0:15.583, SD1:17.019, SD2:18.670, SD3:20.580, SD4:22.490},
  615: { SD4neg:11.248, SD3neg:12.229, SD2neg:13.209, SD1neg:14.316, SD0:15.573, SD1:17.008, SD2:18.657, SD3:20.567, SD4:22.476},
  620: { SD4neg:11.244, SD3neg:12.223, SD2neg:13.202, SD1neg:14.308, SD0:15.563, SD1:16.997, SD2:18.645, SD3:20.554, SD4:22.463},
  625: { SD4neg:11.240, SD3neg:12.218, SD2neg:13.195, SD1neg:14.300, SD0:15.554, SD1:16.986, SD2:18.633, SD3:20.542, SD4:22.450},
  630: { SD4neg:11.236, SD3neg:12.212, SD2neg:13.189, SD1neg:14.292, SD0:15.544, SD1:16.976, SD2:18.622, SD3:20.529, SD4:22.437},
  635: { SD4neg:11.232, SD3neg:12.207, SD2neg:13.182, SD1neg:14.284, SD0:15.535, SD1:16.965, SD2:18.611, SD3:20.517, SD4:22.424},
  640: { SD4neg:11.228, SD3neg:12.202, SD2neg:13.176, SD1neg:14.276, SD0:15.526, SD1:16.955, SD2:18.600, SD3:20.506, SD4:22.412},
  645: { SD4neg:11.224, SD3neg:12.197, SD2neg:13.170, SD1neg:14.269, SD0:15.518, SD1:16.946, SD2:18.589, SD3:20.494, SD4:22.400},
  650: { SD4neg:11.220, SD3neg:12.192, SD2neg:13.164, SD1neg:14.262, SD0:15.509, SD1:16.936, SD2:18.579, SD3:20.483, SD4:22.388},
  655: { SD4neg:11.217, SD3neg:12.187, SD2neg:13.158, SD1neg:14.255, SD0:15.501, SD1:16.927, SD2:18.569, SD3:20.473, SD4:22.378},
  660: { SD4neg:11.213, SD3neg:12.183, SD2neg:13.152, SD1neg:14.248, SD0:15.493, SD1:16.918, SD2:18.559, SD3:20.463, SD4:22.367},
  665: { SD4neg:11.210, SD3neg:12.179, SD2neg:13.147, SD1neg:14.241, SD0:15.486, SD1:16.909, SD2:18.549, SD3:20.453, SD4:22.356},
  670: { SD4neg:11.207, SD3neg:12.175, SD2neg:13.142, SD1neg:14.235, SD0:15.478, SD1:16.901, SD2:18.540, SD3:20.443, SD4:22.346},
  675: { SD4neg:11.204, SD3neg:12.170, SD2neg:13.136, SD1neg:14.229, SD0:15.471, SD1:16.893, SD2:18.531, SD3:20.434, SD4:22.337},
  680: { SD4neg:11.202, SD3neg:12.167, SD2neg:13.132, SD1neg:14.223, SD0:15.464, SD1:16.885, SD2:18.522, SD3:20.425, SD4:22.327},
  685: { SD4neg:11.199, SD3neg:12.163, SD2neg:13.127, SD1neg:14.217, SD0:15.457, SD1:16.877, SD2:18.514, SD3:20.416, SD4:22.318},
  690: { SD4neg:11.197, SD3neg:12.160, SD2neg:13.123, SD1neg:14.212, SD0:15.451, SD1:16.869, SD2:18.505, SD3:20.407, SD4:22.309},
  695: { SD4neg:11.194, SD3neg:12.156, SD2neg:13.118, SD1neg:14.206, SD0:15.444, SD1:16.862, SD2:18.498, SD3:20.399, SD4:22.301},
  700: { SD4neg:11.192, SD3neg:12.153, SD2neg:13.114, SD1neg:14.201, SD0:15.438, SD1:16.855, SD2:18.490, SD3:20.391, SD4:22.292},
  705: { SD4neg:11.190, SD3neg:12.150, SD2neg:13.110, SD1neg:14.196, SD0:15.432, SD1:16.848, SD2:18.483, SD3:20.384, SD4:22.285},
  710: { SD4neg:11.188, SD3neg:12.147, SD2neg:13.106, SD1neg:14.191, SD0:15.426, SD1:16.842, SD2:18.475, SD3:20.376, SD4:22.276},
  715: { SD4neg:11.186, SD3neg:12.144, SD2neg:13.102, SD1neg:14.187, SD0:15.421, SD1:16.835, SD2:18.468, SD3:20.368, SD4:22.269},
  720: { SD4neg:11.184, SD3neg:12.142, SD2neg:13.099, SD1neg:14.182, SD0:15.415, SD1:16.829, SD2:18.462, SD3:20.362, SD4:22.262},
  725: { SD4neg:11.183, SD3neg:12.139, SD2neg:13.095, SD1neg:14.178, SD0:15.410, SD1:16.823, SD2:18.455, SD3:20.355, SD4:22.254},
  726: { SD4neg:11.182, SD3neg:12.138, SD2neg:13.095, SD1neg:14.177, SD0:15.409, SD1:16.822, SD2:18.454, SD3:20.354, SD4:22.254},
}

export default bfaGirlsSd;