export const tools_data = [
  {
    tool: "fortio",
    link: "https://github.com/istio/fortio/",
    language: "Golang",
    written_for: "Istio, General use",
    supported_by: "Istio",
    desc: "A load testing library and command line tool and web UI. Allows to specify a set query-per-second load and record latency histograms and other useful stats."
  },
  {
    tool: "httpbin",
    link: "https://github.com/requests/httpbin",
    language: "Python",
    written_for: "General use",
    supported_by: "Kenneth Reitz",
    desc: "A simple HTTP request & response service."
  },
  {
    tool: "Meshery",
    link: "https://github.com/layer5io/meshery",
    language: "Golang",
    written_for: "Istio, Linkerd, Consul, Cilium Service Mesh, Network Service Mesh, App Mesh",
    supported_by: "Layer5",
    desc: "A service mesh playground to facilitate learning about functionality and performance of different service meshes. Meshery incorporates the collection and display of metrics from applications running in the playground."
  },
  {
    tool: "iago",
    link: "https://github.com/twitter/iago",
    language: "Scala",
    written_for: "Finagle, General use",
    supported_by: "Twitter",
    desc: "A load generation tool that replays production or synthetic traffic against a given target. Among other things, it differs from other load generation tools in that it attempts to hold constant the transaction rate."
  },
  {
    tool: "slow_cooker",
    link: "https://github.com/buoyantio/slow_cooker",
    language: "Golang",
    written_for: "Linkerd, General use",
    supported_by: "Buoyant",
    desc: "A load testing tool that produces a predictable load and concurrency level for a long period of time. Provides periodic reports of qps and latency (during testing)."
  },
  {
    tool: "wrk",
    link: "https://github.com/wg/wrk",
    language: "C",
    written_for: "General use",
    supported_by: "Will Glozer",
    desc: "A modern HTTP benchmarking tool capable of generating significant load when run on a single multi-core CPU. It combines a multithreaded design with scalable event notification systems such as epoll and kqueue."
  },
  {
    tool: "istio-vet",
    link: "https://github.com/aspenmesh/istio-vet",
    language: "Golang",
    written_for: "General use",
    supported_by: "Aspen Mesh",
    desc: "A tool for validating Istio and application configuration installed in a Kubernetes cluster. It detects incompatible or incorrect configuration which might lead to unexpected runtime behaviors."
  },
  {
    tool: "Kiali",
    link: "https://www.kiali.io",
    language: "Golang",
    written_for: "Istio",
    supported_by: "Kiali Project, Red Hat",
    desc: "A graphical user interface to provide insight into what is happening within your Istio service mesh. Kiali graphs the interaction between service mesh components, handles configuration files, and analyses your mesh for potential issues."
  },
  {
    tool: "Naftis",
    link: "https://github.com/xiaomi/naftis",
    language: "Golang",
    written_for: "Istio",
    supported_by: "Xiaomi",
    desc: "A web-based dashboard for Istio. It helps user manage their Istio tasks more easily. Using Naftis we can custom our own task templates, then build task from them and execute it."
  },
  {
    tool: "Siege",
    link: "https://github.com/JoeDog/siege",
    language: "C++",
    written_for:
      "Reporting the total number of hits recorded, bytes transferred, response time, concurrency, and return status on web",
    supported_by: "Jeffrey Fulmer",
    desc: "It is an http load tester and benchmarking utility."
  },
  {
    tool: "Hyperfoil",
    link: "https://github.com/Hyperfoil/Hyperfoil",
    language: "Java",
    written_for: "General use",
    supported_by: "Red Hat",
    desc: "Microservice-oriented distributed benchmark framework: \n &bull; Drive the load from many nodes. \n &bull; Express complex scenarios either in YAML or through pluggable steps. \n &bull; All operations are async to avoid coordinated-omission fallacy (open model by default)."
  },
  {
    tool: "CNCF Testbed",
    link: "https://github.com/cncf/cnf-testbed",
    language: "Shell",
    written_for: "Testing network functions",
    supported_by: "CNCF, TLF",
    desc: "The CNCF CNF Testbed provides reference code and test cases for running the same networking code packaged as containers (Cloud native Network Functions or CNFs) on Kubernetes and as virtual machines (Virtual Network Functions or VNFs) on OpenStack."
  },
  {
    tool: "Vegeta",
    link: "https://github.com/tsenart/vegeta",
    language: "Golang",
    written_for: "HTTP load testing tool",
    supported_by: "Tomás Senart",
    desc: "Vegeta is a versatile HTTP load testing tool built out of a need to drill HTTP services with a constant request rate. It can be used both as a command line utility and a library."
  },
  {
    tool: "Locust",
    link: "https://github.com/locustio/locust",
    language: "Python",
    written_for: "Scalable user load testing tool",
    supported_by: "Locustio",
    desc: "Locust is an easy-to-use, distributed, user load testing tool. It is intended for load-testing web sites (or other systems) and figuring out how many concurrent users a system can handle."
  },
  {
    tool: "Nighthawk",
    link: "https://getnighthawk.dev/",
    language: "C++",
    written_for: "L7 (HTTP/HTTPS/HTTP2) performance characterization tool",
    supported_by: "Envoy, CNCF",
    desc: "Nighthawk provides Service Mesh Performance-compatible access to the L7 (HTTP/HTTPS/HTTP2) performance characterization tool, Nighthawk. Nighthawk’s design focuses on exact request release timing and aims to provide its users with the ability to dynamically customize the request headers and content during an experiment."
  }
];
