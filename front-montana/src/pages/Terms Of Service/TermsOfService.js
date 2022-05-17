import Footer from "../../components/footer/Footer";
import { styles } from "../../animation/styles";
import { StyleRoot } from "radium";
import "./termsOfService.css";

const terms = [
  {
    id: 1,
    title: "Our Performance",
    text: "Sed ac sollicitudin ipsum. Vivamus vulputate, enim sit amet aliquet lacinia, ex mauris aliquam elit, vel pharetra augue arcu ultricies magna. Suspendisse justo erat, dignissim ut imperdiet ut, convallis vitae urna. Vivamus tincidunt lacinia metus sed suscipit. Phasellus luctus rhoncus mauris ut euismod. Aliquam elementum malesuada erat, vitae bibendum ex rutrum eget. Mauris sed nunc mauris. Curabitur semper sed justo a pellentesque. In hac habitasse platea dictumst. Mauris semper volutpat iaculis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur consectetur dignissim nulla id ornare. Praesent placerat dolor vitae tellus lacinia, a malesuada est sodales. Praesent at consectetur sem, sed scelerisque arcu. Maecenas malesuada lorem id sagittis scelerisque. In hac habitasse platea dictumst.",
  },
  {
    id: 2,
    title: "Cookie",
    text: "Pellentesque sit amet nulla facilisis, lobortis ex at, consequat diam. Pellentesque sed dui lorem. Aliquam vel euismod nunc. Nulla facilisi. Donec consectetur faucibus rutrum. Pellentesque ac ultricies sapien, ac iaculis erat. Vivamus posuere eget nulla sit amet vehicula. Donec finibus maximus eros, at tincidunt ipsum vestibulum ac. Integer vel metus vehicula, consequat velit a, eleifend mi. Curabitur erat mauris, luctus non dictum vel, fringilla dignissim quam. Phasellus eleifend porta fermentum. Pellentesque posuere massa vitae odio pulvinar feugiat. Fusce a risus sodales, maximus sapien sit amet, pharetra ipsum. Vivamus varius eros ac sapien pulvinar, nec tincidunt dui bibendum. Proin consectetur nibh tortor, nec vulputate ex posuere eget.",
  },
  {
    id: 3,
    title: "Payments",
    text: "Amet nulla facilisis, lobortis ex at, consequat diam. Pellentesque sed dui lorem. Aliquam vel euismod nunc. Nulla facilisi. Donec consectetur faucibus rutrum. Pellentesque ac ultricies sapien, ac iaculis erat. Vivamus posuere eget nulla sit amet vehicula. Donec finibus maximus eros, at tincidunt ipsum vestibulum ac. Integer vel metus vehicula, consequat velit a, eleifend mi. Curabitur erat mauris, luctus non dictum vel, fringilla dignissim quam. Phasellus eleifend porta fermentum. Pellentesque posuere massa vitae odio pulvinar feugiat. Fusce a risus sodales, maximus sapien sit amet, pharetra ipsum. Vivamus varius eros ac sapien pulvinar, nec tincidunt dui bibendum. Proin consectetur nibh tortor, nec vulputate ex posuere eget.",
  },
  {
    id: 4,
    title: "Refund Policy",
    text: "Donec ut vestibulum sem, in faucibus mauris. Nulla et luctus nulla. Vestibulum consectetur nisi nec lobortis pretium. Fusce dignissim in sem in bibendum. Vivamus fermentum massa et egestas gravida. Suspendisse at vulputate ante, id tempus nunc. Curabitur sed dolor a elit ornare commodo. Curabitur blandit enim nulla, ornare suscipit risus pretium ut. Nullam rhoncus, sem eget dapibus elementum, purus dolor rutrum magna, nec laoreet odio sapien sit amet erat.<br/>Proin non ante purus. Donec ante enim, semper vel mauris at, rutrum blandit mauris. Vivamus at ante sit amet leo consequat viverra quis at odio. Proin arcu magna, placerat sed lorem id, rutrum convallis ante.Nam venenatis vestibulum mauris ut viverra. Ut porta consequat lorem a ullamcorper. In et arcu quam. Nunc tristique justo nec lectus ornare placerat. Nulla ut fringilla mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
  },
  {
    id: 5,
    title: "Disclaimer",
    text: "Donec facilisis consequat nisi. Vivamus euismod at ipsum a gravida. Quisque vitae augue maximus elit iaculis tincidunt. Quisque dapibus dui non justo iaculis volutpat. Phasellus vulputate tempus lorem vitae vehicula. Maecenas interdum venenatis ante, scelerisque porta nibh mollis vitae. Curabitur in erat porttitor, imperdiet lectus non, porttitor odio. Donec efficitur efficitur dapibus. Aenean sit amet tortor id lorem ultricies rhoncus. Etiam ornare eros eu commodo vehicula. Curabitur vel enim eget velit tincidunt viverra eu in risus. Aliquam suscipit tellus eu fermentum facilisis. Pellentesque volutpat posuere ligula. Fusce et consequat mi.",
  },
];

function TermsOfService() {
  return (
    <StyleRoot>
      <div className="div-terms">
        <div className="div-terms-header">
          <p className="p-terms-title" style={styles.fadeInDown2s}>
            Terms Of Service
          </p>
        </div>

        <div className="div-terms-block">
          {terms.map((item) => (
            <div className="div-terms-block-item" key={item.id}>
              <div className="div-terms-title">
                <span className="span-color"><i class="fa fa-minus"></i></span>
                <span className="span-terms-title">{item.title}</span>

              </div>
              <span className="span-terms-text">{item.text}</span>
            </div>
          ))}
        </div>

        <div className="div-terms-footer div-8-end">
          <Footer />
        </div>
      </div>
    </StyleRoot>
  );
}

export default TermsOfService;
