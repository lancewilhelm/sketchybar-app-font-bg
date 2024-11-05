import React from 'react';
export const Calculator = props => (
  <svg viewBox="0 0 20 20"  {...props} className={`sketchybar-app-font-bg ${props.className ? props.className : ''}`}><path d="m37.33.029 6.838-.028L64.79.039l7.013.018c4.085.01 8.314.009 12.285 1.089a21.564 21.564 0 0 1 1.961.629 20.605 20.605 0 0 1 1.889.818 20.77 20.77 0 0 1 5.065 3.503 20.181 20.181 0 0 1 2.396 2.669 22.503 22.503 0 0 1 .832 1.189c.132.203.261.408.386.615a21.807 21.807 0 0 1 1.024 1.921 20.632 20.632 0 0 1 1.047 2.707 21.32 21.32 0 0 1 .381 1.401c1.008 4.178.93 8.605.931 12.878v9.44l-.002 30.588c0 8.93.238 17.242-6.539 23.998-5.827 5.81-12.455 6.366-20.279 6.472-3.489.025-6.978.032-10.466.021h-25.41l-8.543-.001c-4.044-.009-8.24.018-12.191-.952a20.152 20.152 0 0 1-1.361-.373 20.21 20.21 0 0 1-1.987-.728 20.712 20.712 0 0 1-1.904-.925 20.602 20.602 0 0 1-2.376-1.521 21.258 21.258 0 0 1-2.15-1.825C.756 87.761.144 80.863.071 72.841L.002 40.8c-.027-4.026-.01-8.052.049-12.078.047-4.025.001-8.138.937-12.077a21.004 21.004 0 0 1 1.407-4.08c.101-.218.206-.434.314-.649a22.808 22.808 0 0 1 .695-1.262 21.44 21.44 0 0 1 1.2-1.796 22.232 22.232 0 0 1 .9-1.126 22.159 22.159 0 0 1 .975-1.06C12.488.572 19.729.086 27.84.058l9.49-.029Zm38.492 17.745c-.039-.499-.307-1.057-.483-1.525-.843-1.538-2.116-2.794-3.831-3.311-.821-.247-1.682-.359-2.536-.405-2.425-.129-4.895-.034-7.325-.034l-13.634.003-11.027-.002c-2.141-.001-4.334-.099-6.468.07-1.127.089-2.166.321-3.165.869a7.02 7.02 0 0 0-.854.561c-.067.053-.134.106-.199.161a7.727 7.727 0 0 0-.377.345 6.231 6.231 0 0 0-.668.774 7.1 7.1 0 0 0-.537.87c-.038.076-.076.152-.112.23-.129.375-.299.772-.36 1.164-.555 1.566-.353 5.603-.353 7.427 0 1.093-.06 2.227.015 3.315-.047 1.259-.016 2.527-.015 3.787l.003 6.499-.001 20.03-.001 14.443c0 2.616-.131 5.304.068 7.91.084 1.102.327 2.223.893 3.186 1.393 1.873 2.61 2.887 4.981 3.244 2.007.303 4.606.143 6.674.142l11.981-.006 13.838-.005 4.191-.001c1.094 0 2.193.021 3.282-.099 1.28-.141 2.456-.506 3.499-1.279.442-.327.827-.705 1.207-1.101.857-1.028 1.326-2.318 1.475-3.636.255-2.255.116-4.629.115-6.898l-.002-11.751.004-42.126c-.018-.948-.051-1.927-.278-2.851Zm-5.877 56.379c.465.539.734 1.369.844 2.065a5.472 5.472 0 0 1 .065 1.034 5.646 5.646 0 0 1-.086.773 5.456 5.456 0 0 1-.199.752 5.06 5.06 0 0 1-.195.481 5.642 5.642 0 0 1-.378.68 5.183 5.183 0 0 1-1.025 1.14 4.922 4.922 0 0 1-.626.442 6.104 6.104 0 0 1-.451.242 4.879 4.879 0 0 1-.473.195 4.06 4.06 0 0 1-.243.08 5.268 5.268 0 0 1-2.306.166 4.458 4.458 0 0 1-.257-.046 4.44 4.44 0 0 1-.505-.129 4.475 4.475 0 0 1-.489-.179 4.567 4.567 0 0 1-.469-.226 5.548 5.548 0 0 1-.656-.425 5.018 5.018 0 0 1-.74-.684 5.008 5.008 0 0 1-.315-.393 5.112 5.112 0 0 1-.509-.87 4.717 4.717 0 0 1-.187-.468 4.792 4.792 0 0 1-.233-.98c-.165-1.235.093-2.653.86-3.658.68-1.099 1.869-1.852 3.114-2.141a5.76 5.76 0 0 1 .513-.091 5.537 5.537 0 0 1 .779-.04c.087.002.174.006.261.013a4.536 4.536 0 0 1 .516.063 5.516 5.516 0 0 1 .758.19 4.48 4.48 0 0 1 .485.188 5.073 5.073 0 0 1 .688.369c.52.332 1.19.889 1.459 1.457Zm-.169-31.504c.867 1.161 1.231 2.531 1.016 3.971a5.258 5.258 0 0 1-2.28 3.546 5.4 5.4 0 0 1-.679.374 4.971 4.971 0 0 1-.726.27 5.406 5.406 0 0 1-.503.119 5.45 5.45 0 0 1-1.03.085 5.56 5.56 0 0 1-.515-.034 5.668 5.668 0 0 1-.509-.085 5.655 5.655 0 0 1-.737-.221 5.414 5.414 0 0 1-1.339-.752 6.372 6.372 0 0 1-.39-.334 5.177 5.177 0 0 1-.673-.774 4.366 4.366 0 0 1-.275-.431 4.447 4.447 0 0 1-.231-.457 4.893 4.893 0 0 1-.322-.97 5.302 5.302 0 0 1-.112-.759 5.462 5.462 0 0 1 .001-.767 5.504 5.504 0 0 1 .064-.508 5.497 5.497 0 0 1 .603-1.678c.098-.174.204-.342.32-.504a5.574 5.574 0 0 1 1.189-1.164 5.235 5.235 0 0 1 1.362-.692 5.315 5.315 0 0 1 1.505-.267 5.462 5.462 0 0 1 .766.035c1.417.173 2.616.881 3.495 1.997Zm-15.5.25c.637.703.899 1.902.91 2.825a5.615 5.615 0 0 1-.081 1.031 5.399 5.399 0 0 1-.194.751 5.024 5.024 0 0 1-.564 1.161 4.498 4.498 0 0 1-.304.419 4.591 4.591 0 0 1-.53.564 4.543 4.543 0 0 1-.397.327 5.3 5.3 0 0 1-2.1.929 4.313 4.313 0 0 1-.508.075 4.44 4.44 0 0 1-.514.025 4.399 4.399 0 0 1-.511-.027 4.297 4.297 0 0 1-.254-.032 4.43 4.43 0 0 1-.502-.101 4.956 4.956 0 0 1-.489-.15 4.908 4.908 0 0 1-.702-.312 6.062 6.062 0 0 1-.438-.264 5.228 5.228 0 0 1-1.292-1.239 5.043 5.043 0 0 1-.284-.432 4.965 4.965 0 0 1-.34-.695 5.462 5.462 0 0 1-.167-.489 5.407 5.407 0 0 1-.157-.759 5.453 5.453 0 0 1-.041-.514 5.59 5.59 0 0 1 0-.259c.018-1.159.431-2.497 1.283-3.319.533-.851 1.755-1.436 2.702-1.656.085-.02.17-.038.256-.053.085-.016.171-.03.258-.041a5.702 5.702 0 0 1 1.043-.033c.087.006.174.014.26.025a4.483 4.483 0 0 1 .516.087 5.486 5.486 0 0 1 .504.137 6.505 6.505 0 0 1 .488.187 5.107 5.107 0 0 1 .691.369c.491.309 1.249.905 1.458 1.463ZM39.302 59.755c.483 1.211.371 2.612-.14 3.796a5.22 5.22 0 0 1-.487.882 5.878 5.878 0 0 1-.306.401 5.003 5.003 0 0 1-.53.539 5.882 5.882 0 0 1-.604.456 4.75 4.75 0 0 1-.665.361 5.97 5.97 0 0 1-.474.186 5.018 5.018 0 0 1-1.002.233 5.596 5.596 0 0 1-.771.043 5.56 5.56 0 0 1-.514-.033 5.214 5.214 0 0 1-1.249-.302 6.28 6.28 0 0 1-.239-.097 4.916 4.916 0 0 1-.681-.359 6.099 6.099 0 0 1-.421-.294 5.172 5.172 0 0 1-1.463-1.765 4.897 4.897 0 0 1-.21-.468c-.41-1.058-.483-2.318-.104-3.394a5.32 5.32 0 0 1 .277-.72c.566-1.223 1.655-2.186 2.918-2.642a5.36 5.36 0 0 1 1.252-.284 5.45 5.45 0 0 1 .771-.019 5.54 5.54 0 0 1 .766.095 4.518 4.518 0 0 1 .498.125 6.395 6.395 0 0 1 .484.175c.08.033.158.068.235.105 1.269.603 2.19 1.663 2.659 2.98Zm8.814-41.281c4.247-.031 8.495-.041 12.742-.029l4.085-.008c.986-.001 1.998-.04 2.975.104.685.101 1.377.31 1.877.814.425.429.699 1.003.824 1.59.284 1.341.135 2.883.136 4.254-.007 2.122.007 4.245.043 6.367.017 1.111-.046 2.097-.891 2.932-.44.436-.999.712-1.606.82-1.568.282-4.006.12-5.68.119l-10.815.002-13.291-.002-3.833.005c-.932 0-1.89.044-2.813-.098-.627-.096-1.204-.33-1.683-.756-.658-.585-.806-1.398-.85-2.236-.098-1.882-.008-3.79-.012-5.676-.003-1.539-.164-4.024.093-5.422a3.306 3.306 0 0 1 .825-1.676 2.618 2.618 0 0 1 .31-.284 2.525 2.525 0 0 1 .537-.33 2.747 2.747 0 0 1 .598-.199c1.615-.349 4.347-.216 6.057-.213 3.447.007 6.928.068 10.372-.078Zm6.852 41.469c.411 1.228.283 2.647-.285 3.805a5.49 5.49 0 0 1-.704 1.071c-.056.066-.113.13-.172.192a5.12 5.12 0 0 1-1.431 1.076 5.458 5.458 0 0 1-.711.298 5.01 5.01 0 0 1-.748.191 5.61 5.61 0 0 1-.511.066 5.569 5.569 0 0 1-1.029-.021 5.591 5.591 0 0 1-.758-.148 5.381 5.381 0 0 1-.962-.367 4.901 4.901 0 0 1-.659-.396 7.845 7.845 0 0 1-.206-.153 6.145 6.145 0 0 1-.387-.336 4.436 4.436 0 0 1-.353-.373 5.225 5.225 0 0 1-.708-1.066 4.9 4.9 0 0 1-.292-.712c-.265-.833-.41-2.059-.074-2.889.061-.36.232-.75.393-1.077a4.68 4.68 0 0 1 .246-.436 5.825 5.825 0 0 1 .288-.41 4.2 4.2 0 0 1 .159-.194c.054-.064.11-.126.168-.186a4.939 4.939 0 0 1 1.179-.923 5.256 5.256 0 0 1 .448-.226 4.676 4.676 0 0 1 .467-.181 5.018 5.018 0 0 1 .747-.194 5.41 5.41 0 0 1 1.025-.082 4.45 4.45 0 0 1 .514.035 5.582 5.582 0 0 1 .508.085 5.381 5.381 0 0 1 .978.32c.078.035.156.072.233.11 1.318.657 2.17 1.742 2.637 3.121ZM38.34 42.529c.681.547 1.056 1.822 1.15 2.656.135 1.21-.098 1.605-.369 2.725a8.882 8.882 0 0 1-1.038 1.559c-.961.854-2.041 1.437-3.34 1.538-1.615.125-2.918-.503-4.12-1.528-.779-.975-1.204-1.781-1.448-3.011.025-.218-.007-.457 0-.679.034-1.195.37-2.526 1.271-3.373.486-.822 1.705-1.407 2.599-1.633a4.44 4.44 0 0 1 .254-.058 4.458 4.458 0 0 1 .515-.079 5.684 5.684 0 0 1 .521-.027 5.639 5.639 0 0 1 .52.025 5.548 5.548 0 0 1 .77.134 5.48 5.48 0 0 1 .498.151 5.096 5.096 0 0 1 .481.201 5.687 5.687 0 0 1 .459.247c.455.272 1.008.69 1.277 1.152Zm11.396 29.376c1.475.002 2.914.496 3.965 1.556a5.098 5.098 0 0 1 1.436 2.919 5.444 5.444 0 0 1 .009 1.264 5.12 5.12 0 0 1-.209.98 6.68 6.68 0 0 1-.082.238 5.915 5.915 0 0 1-.199.461 5.834 5.834 0 0 1-.243.439 5.813 5.813 0 0 1-.285.413 4.922 4.922 0 0 1-.5.563 4.985 4.985 0 0 1-2.49 1.315c-1.847.393-4.825.211-6.805.211-2.963 0-5.938.056-8.901-.008-1.825-.04-3.485-.249-4.818-1.627a5.107 5.107 0 0 1-.488-.587 6.007 6.007 0 0 1-.275-.429 5.342 5.342 0 0 1-.489-1.173 5.244 5.244 0 0 1-.186-1.257 5.377 5.377 0 0 1 .012-.508 5.282 5.282 0 0 1 .11-.753 5.234 5.234 0 0 1 .135-.49 5.243 5.243 0 0 1 .413-.926 4.805 4.805 0 0 1 .425-.631 6.008 6.008 0 0 1 .334-.382c.059-.061.119-.12.181-.178.386-.36.927-.753 1.436-.907.423-.339 1.481-.439 2.005-.484 1.042-.089 2.097-.067 3.143-.068l4.399-.001c2.544 0 5.462-.119 7.967.05ZM70.52 59.597c.476 1.389.471 2.83-.19 4.164a5.002 5.002 0 0 1-.396.668 4.474 4.474 0 0 1-.317.411 6.242 6.242 0 0 1-.356.376 5.278 5.278 0 0 1-.392.34 5.321 5.321 0 0 1-1.841.925 5.496 5.496 0 0 1-.508.112 4.576 4.576 0 0 1-.258.037 4.45 4.45 0 0 1-.518.036 5.678 5.678 0 0 1-.779-.044 4.432 4.432 0 0 1-.257-.041 4.62 4.62 0 0 1-.506-.118 5.15 5.15 0 0 1-.732-.272 5.563 5.563 0 0 1-.459-.24 4.997 4.997 0 0 1-.635-.443 4.453 4.453 0 0 1-.384-.346 5.277 5.277 0 0 1-1.316-2.193c-.301-.99-.338-2.251.085-3.213.02-.072.023-.088.053-.168a6.475 6.475 0 0 1 .198-.453 5.688 5.688 0 0 1 .24-.432 5.672 5.672 0 0 1 .282-.406c.05-.066.101-.13.155-.193a5.728 5.728 0 0 1 .336-.362 5.836 5.836 0 0 1 .371-.327 5.66 5.66 0 0 1 .61-.42 4.556 4.556 0 0 1 .438-.229 4.929 4.929 0 0 1 .474-.196 5.36 5.36 0 0 1 .492-.149c.083-.02.167-.039.251-.056a5.225 5.225 0 0 1 2.781.22c1.496.542 2.421 1.597 3.078 3.012Z" fillRule="evenodd" /></svg>
);