namespace API.Models
{
    public class Campground
    {
        public int Id { get; set; }
        public string? Title { get; set; }
        public decimal Price { get; set; }
        public string? Description { get; set; }
        public string? Location { get; set; }
        public int UserId { get; set; }
        public AppUser User { get; set; } //Creator of the campground
        public ICollection<Review>? Reviews { get; set; }
    }
}
