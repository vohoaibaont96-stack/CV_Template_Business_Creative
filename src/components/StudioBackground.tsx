/**
 * Nền trang xem trước — chỉ hiển thị trên web, ẩn khi in PDF.
 */
export default function StudioBackground() {
  return (
    <div className="studio-bg no-print" aria-hidden>
      <div className="studio-bg__mesh" />
      <div className="studio-bg__grid" />
      <div className="studio-orb studio-orb--coral" />
      <div className="studio-orb studio-orb--gold" />
      <div className="studio-orb studio-orb--warm" />
      <div className="studio-bg__grain" />
      <div className="studio-bg__vignette" />
    </div>
  );
}
